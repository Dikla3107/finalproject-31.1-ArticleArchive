import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { UtilityService } from './utility.service';
import { finalize } from 'rxjs';
import { Users } from './users/users.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';

  logout() {
    const sub = this.http
      .get('signOut')
      .pipe(
        finalize(() => {
          if (sub?.unsubscribe) {
            sub.unsubscribe();
          }
        })
      )
      .subscribe(() => {
        this.utility.setUser();
        this.router.navigate(['signin']);
      });
  }

  constructor(public utility: UtilityService, private http: HttpService, private router: Router) { }

  ngOnInit() {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      if (user && user !== null && user !== undefined) {
        this.utility.setUser(user);
      } else {
        const sub = this.http
          .get<Users>('users/signin')
          .pipe(
            finalize(() => {
              if (sub?.unsubscribe) {
                sub.unsubscribe();
              }
            })
          )
          .subscribe((data) => {
            this.utility.setUser(data);
          });
      }
    } else {
      const sub = this.http
        .get<Users>('users/signin')
        .pipe(
          finalize(() => {
            if (sub?.unsubscribe) {
              sub.unsubscribe();
            }
          })
        )
        .subscribe((data) => {
          this.utility.setUser(data);
        });
    }
  }
}
