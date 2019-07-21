import { Component, OnInit } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { ArtServiceService } from '../art-service/art-service.service'


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  art;
  artTitle = localStorage.getItem('title')

  constructor(private artService: ArtServiceService) { }

  ngOnInit() {
    this.artService.getArt().subscribe(data => {
      localStorage.setItem('title', data[0].title.value);
      console.log(data)
      
        console.log(data)
        this.art = data;

    })

  }

}
