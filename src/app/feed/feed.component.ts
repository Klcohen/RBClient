import { Component, OnInit } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { ArtServiceService } from '../art-service/art-service.service';
import { CommentService } from '../services/comment.service'
import { UserService } from '../users/user.service';
// import { post } from 'selenium-webdriver/http';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  artList=[];
 
  constructor(private artService: ArtServiceService, private commentService: CommentService, private userService: UserService) { }
  
  ngOnInit() {
    this.artService.getArt().subscribe(art =>{

      this.artList.push(art.reverse());
  })
  }

}
