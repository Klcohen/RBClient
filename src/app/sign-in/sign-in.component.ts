import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../users/user.service'



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
  


  constructor(private userService: UserService) { }
onSubmit() {

  let userlog = {user: { email: this.signInForm.value.email, password: this.signInForm.value.password} };

  this.userService.loginUser(userlog)
  .subscribe(data => {
    console.log(data)
    localStorage.setItem('token', data.sessionToken)
    localStorage.setItem('bio', data.user.bio);
    localStorage.setItem('username', data.user.username)
    localStorage.setItem('id', data.user.id)
  },
  err => console.log(err));

location.pathname ="profile"

}

  ngOnInit() {

  }}