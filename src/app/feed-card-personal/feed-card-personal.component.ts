import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { UserService} from '../users/user.service'
import { getDefaultService } from 'selenium-webdriver/edge';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ArtServiceService } from '../art-service/art-service.service'

@Component({
  selector: 'app-feed-card-personal',
  templateUrl: './feed-card-personal.component.html',
  styleUrls: ['./feed-card-personal.component.css']
})
export class FeedCardPersonalComponent implements OnInit {
 title:any
  constructor(private userService: UserService, public dialog: MatDialog, private artService: ArtServiceService) { }

  deletePost(){
    
    // let postId = 
    // console.log(postId)
    // this.artService.deleteArt(postId).subscribe()
    // alert("your account has been deleted once you logout you'll have to make a new one")
    // window.location.reload();
  }
  ngOnInit() {
    console.log(this.title)
   }

}
