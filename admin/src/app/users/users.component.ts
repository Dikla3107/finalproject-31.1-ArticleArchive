import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { SignIn } from '../login-admin/login.interface';
import { Users } from './users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  user: Users[] = [];
  signIn: SignIn;
  edit(item: Users) {
    
    this.router.navigate(['user-body', item._id]);
  }
  remove(item: Users) {
    
    localStorage.getItem('token');
    const sub = this.http
      .delete<Users>(`users/deleteone/${item._id}`)
      .subscribe((data) => {
        const i = this.user.findIndex((x) => x._id === item._id);
        this.user.splice(i, 1);
        sub.unsubscribe();
      });
  }
  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    localStorage.getItem('token');
    const userId = localStorage.getItem('user');
    

    const sub = this.http.get<Users[]>(`users`).subscribe((data) => {
      this.user = data;
      

      sub.unsubscribe();
    });
  }
}