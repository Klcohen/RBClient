import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../users/user.service'

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




  constructor(private userService: UserService) { }


  onSubmit() {

   let user = {user: { username: this.signUpForm.value.username, email: this.signUpForm.value.email, password: this.signUpForm.value.password, bio: this.signUpForm.value.bio }} ;

    this.userService.addUser(user).subscribe(data => {
      console.log(data)
      localStorage.setItem('token', data.sessionToken),
      localStorage.setItem('bio', data.user.bio);
      localStorage.setItem('username', data.user.username)
      localStorage.setItem('id', data.user.id)

    alert("logged in!")
  },
  err => console.log(err))


  }

  ngOnInit() {

  }
}