import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { User } from './user';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  get isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      this.loggedIn.next(true);
    }
    else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }

  login(user: User, returlUrl: string) {
    if (user.email !== '' && user.password !== '') {
      //make service call to get user token   //this.currentUserSubject.next(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.loggedIn.next(true);
      let url = (returlUrl != null) ? returlUrl : '/members';
      this.router.navigate([url]);
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }


  getCurrentUser(): User {
    return this.currentUserSubject.value;
    //or return from local storage
  }
}