import { Component, OnInit } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { ArtServiceService } from '../art-service/art-service.service';
import { CommentService } from '../services/comment.service'
// import { post } from 'selenium-webdriver/http';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  art;
 
  constructor(private artService: ArtServiceService, private commentService: CommentService) { }
  
  ngOnInit() {
    this.artService.getArt().subscribe(art => this.art = art)
    let postId = 9
    this.commentService.getComment(postId).subscribe()

  }

}
