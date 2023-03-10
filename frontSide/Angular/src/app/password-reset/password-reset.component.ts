import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../http.service';
import { SignInResult } from '../signin/signInResult.interface';
import { Users } from '../users/users.interface';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {
  sub: Subscription;
  user: Users;
  form: FormGroup;

  signIn() {
    const data = {
      email: this.form.value.email,
    };

    const sub = this.http
      .post<SignInResult>('users/reset', data)
      .subscribe((item) => {

        localStorage.setItem('token', item.token);
        localStorage.setItem('user', JSON.stringify(item.user));

        this.http.setToken();
        this.utility.setUser(item.user);

        sub.unsubscribe();
        if (this.user._id) this.router.navigate(['password-recovery']);
      });
  }
  buildForm(item: Users) {
    this.form = new FormGroup({
      email: new FormControl(item.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(item.password, [Validators.required]),
    });
  }

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    public utility: UtilityService
  ) {
    this.user = {
      _id: 0,
      userName: '',
      fullName: '',
      email: '',
      password: '',
    };
    this.buildForm(this.user);
  }

  ngOnInit() { }
}
