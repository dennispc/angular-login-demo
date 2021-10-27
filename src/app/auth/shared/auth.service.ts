import { Injectable } from '@angular/core';
import {LoginUser} from './login-user.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: LoginUser): Observable<string | undefined> {
    //todo Faking REST call fix later and remember to drink lots of coffee
    if(user.username === 'ljuul' && user.password === '123') {
      return of('jwt-token123');
    }
    return of(undefined);
  }
}
