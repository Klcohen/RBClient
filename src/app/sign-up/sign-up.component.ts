import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    bio: new FormControl('')
  });

  constructor(private http: HttpClient) { }
onSubmit() {

  
//HOW TO DO???
let signUpUrl = `http://localhost:3001/user/signUp`;

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

let body= JSON.stringify({user:{username: this.signUpForm.value.username, email: this.signUpForm.value.email, password: this.signUpForm.value.password, bio: this.signUpForm.value.bio}});
console.log(body)
this.http.post(signUpUrl, body ,httpOptions)

  
}

  ngOnInit() {

  }}