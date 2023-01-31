import { Injectable } from '@angular/core';
import { Users } from './users/users.interface';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    public user?: Users;
    isNavOpen = false;

    setUser(user?: Users) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUser() {
        return this.user;
    }
    removeUser() {
        this.user = undefined;
    }

    constructor() { }
}