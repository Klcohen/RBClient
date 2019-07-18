import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { UserService} from '../users/user.service'
import { getDefaultService } from 'selenium-webdriver/edge';
import { SignUpComponent} from '../sign-up/sign-up.component'
import { User } from '../users/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  bio = localStorage.getItem('bio')
  username = localStorage.getItem('username')


  constructor(private userService: UserService) { }


  ngOnInit() {
    this.userService.getUser().subscribe(data => {
      localStorage.setItem('bio', data[0].bio);
      localStorage.setItem('username', data[0].username)
    })
  }

  bioEdit(){
    this.userService.editUser().subscribe(data => {
      console.log(data)
    })
  }

  logout(){
    localStorage.setItem('token', "")
    alert("you've been logged out!")
    console.log("session token cleared")
  }
}
