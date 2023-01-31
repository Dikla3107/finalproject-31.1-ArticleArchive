import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Menu } from '../navbar/navbar.interface';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  date: any = new Date().getFullYear();
  active: string = '';
  user: UtilityService;
  menu: Menu[] = [

    { route: '/', title: 'Home' },
    { route: '/articles', title: 'Articles', isConnected: true },
    /* { route: '/signup', title: 'SignUp' },
    { route: '/signin', title: 'SignIn' }, */
  ];

  logout() {
    if (this.utility.getUser()) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.utility.removeUser();
    }
  }
  constructor(public utility: UtilityService, private router: Router, private http: HttpClient) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.active = event.url;
      }
    })
  }
  ngOnInit(): void {
    const user = this.utility.getUser();
  }
}
