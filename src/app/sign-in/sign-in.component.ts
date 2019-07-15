import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  


  constructor(private http: HttpClient) { }
onSubmit() {

  
//HOW TO DO???

let signInUrl = `http://localhost:3001/user/signin`;

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

let body= JSON.stringify({user:{email: this.signInForm.value.email, password: this.signInForm.value.password}});

return this.http.post(signInUrl, body ,httpOptions)


}

  ngOnInit() {

  }}