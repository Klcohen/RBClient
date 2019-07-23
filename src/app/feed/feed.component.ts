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

  artList;
  constructor(private artService: ArtServiceService) { }

  bgColor(i : number, j : number, x : number) {
    const color = this.artList[x].image[i][j]
    return { "background-color": color ? color : "#ffffff" }
  }

  ngOnInit() {
    this.artService.getArt().subscribe(data => {
      console.log(data)
      
        console.log(data)
        this.artList = data.reverse();
    })


  }

}
