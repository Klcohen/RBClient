import { Art } from './art-service'
import { catchError, retry } from 'rxjs/operators';
import { Injectable} from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ArtCreateComponent } from "../art-create/art-create.component"


let httpOptionsOne = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': localStorage.getItem('token')
  })
};


@Injectable({
  providedIn: 'root'
})
export class ArtServiceService {

  constructor(private http: HttpClient) { }

artCreateUrl = `http://localhost:3001/art/`
artFeedUrl = `http://localhost:3001/art/feed`
artPersonalUrl = `http://localhost:3001/art/mine`
artDeleteUrl= `http://localhost:3001/art/:id`


createArt(art: Art): Observable<Art> {
  console.log(localStorage.getItem('token'))
  return this.http.post<Art>(this.artCreateUrl, art, httpOptions)
};

getArt() {
  return this.http.get<Art>(this.artFeedUrl, httpOptions)
}

deleteArt() {
  return this.http.delete<Art>(this.artDeleteUrl, httpOptions)
}

}
