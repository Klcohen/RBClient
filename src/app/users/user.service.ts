import { User } from './user'
import { HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

 // HOW TO DO???
signUpUrl = `http://localhost:3001/user/signUp`;
signInUrl = `http://localhost:3001/user/signIn`;

addUser(user: User): Observable<User> {
  return this.http.post<User>(this.signUpUrl, user ,httpOptions)
  .pipe(
    catchError(this.handleError('addUser', user))
    );
}


// let body= JSON.stringify({user:{username: this.signUpForm.value.username, email: this.signUpForm.value.email, password: this.signUpForm.value.password, bio: this.signUpForm.value.bio}});
// console.log(body)


  

}
