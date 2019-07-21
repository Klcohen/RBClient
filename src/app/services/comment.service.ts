import { Comment } from './comment'
import { catchError, retry } from 'rxjs/operators';
import { Injectable} from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': localStorage.getItem('token')
  })
};



@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

 // HOW TO DO???
commentUrl = `http://localhost:3001/comments/`;


// addComment(comment : Comment): Observable<Comment> {
//   return this.http.post<Comment>(this.commentUrl, comment ,httpOptions)
//   // .pipe(
//   //   catchError(this.handleError( user ))
//   //   );
// };

addComment(comment: Comment): Observable<Comment> {
  console.log(localStorage.getItem('token'))
  return this.http.post<Comment>(this.commentUrl, comment, httpOptions)
};
// private handleError(error: HttpErrorResponse) {
//   if (error.error instanceof ErrorEvent) {
//     // A client-side or network error occurred. Handle it accordingly.
//     console.error('An error occurred:', error.error.message);
//   } else {
//     // The backend returned an unsuccessful response code.
//     // The response body may contain clues as to what went wrong,
//     console.error(
//       `Backend returned code ${error.status}, ` +
//       `body was: ${error.error}`);
//   }
//   // return an observable with a user-facing error message
//   return throwError(
//     'Something bad happened; please try again later.');
// }
}

