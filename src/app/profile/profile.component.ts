import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { UserService} from '../users/user.service'
import { getDefaultService } from 'selenium-webdriver/edge';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // getUser()
  }
  logout(){
    localStorage.setItem('token', "")
    alert("you've been logged out!")
    console.log("session token cleared")
  }
}
