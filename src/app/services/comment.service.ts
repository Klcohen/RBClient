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
commentUrl = `https://pixspire-server.herokuapp.com/comments/`;



addComment(comments: Comment, postId): Observable<Comment> {
  return this.http.post<Comment>(`${this.commentUrl}${postId}`, comments, httpOptions)
}


getComment(postId) {
  return this.http.get<Comment>(`${this.commentUrl}${postId}`, httpOptions)
}

editComment(comments: Comment, commentId): Observable<Comment> {
  return this.http.put<Comment>(`${this.commentUrl}${commentId}`,comments, httpOptions)
}

deleteComment(commentId){
  return this.http.delete(`${this.commentUrl}${commentId}`, httpOptions)
}

}