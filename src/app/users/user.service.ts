import { User } from './user'
import { UserLogin } from './user'
import { catchError, retry } from 'rxjs/operators';
import { Injectable} from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SignUpComponent } from "../sign-up/sign-up.component"
//Grab everything with import 'rxjs/Rx';



let httpOptionsOne = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

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
signInUrl = `http://localhost:3001/user/login`;
userUrl= `http://localhost:3001/user/`;

addUser(user: User): Observable<User> {
  return this.http.post<User>(this.signUpUrl, user ,httpOptionsOne)
};

loginUser(userlog: UserLogin): Observable<UserLogin> {
  return this.http.post<UserLogin>(this.signInUrl, userlog ,httpOptionsOne)
};

getUser() {
  return this.http.get<User>(this.userUrl)
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
}

}
