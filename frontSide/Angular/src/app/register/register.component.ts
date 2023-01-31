import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../http.service';
import { Users } from '../users/users.interface';
import { Register } from './registrer.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;
  user: Users;
  sub: Subscription;


  regiButton() {
    const data = this.form.value;


    const sub = this.http.post<Users>("users/create", data).subscribe(item => {
      sub.unsubscribe();
      this.router.navigate(['articles']);

    });
  }

  buildForm(item: Users) {
    this.form = new FormGroup({
      userName: new FormControl(item.userName, [Validators.required]),
      fullName: new FormControl(item.fullName, [Validators.required]),
      email: new FormControl(item.email, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      password: new FormControl(item.password, [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
      ]),
      passwordConfirmation: new FormControl('', {
        validators: [Validators.required, this.passwordMatchValidator],
      }),
    });
  }
  passwordMatchValidator(form: FormGroup): { [key: string]: any } | null {
    const password = form.get('password')?.value;
    const passwordConfirmation = form.get('passwordConfirmation')?.value;

    if (password !== passwordConfirmation) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router,) {

    this.sub = this.route.params.subscribe(data => {
      const id: any = data['id'];

      if (id) {
        const sub = this.http.get<Users>(`users/finduser/${id}`).subscribe(data => {
          this.user = data;
          this.buildForm(this.user);
          sub.unsubscribe();
        });
      } else {
        this.user = {
          _id: 0,
          userName: '',
          fullName: '',
          email: '',
          password: '',
        };

        this.buildForm(this.user);

      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
