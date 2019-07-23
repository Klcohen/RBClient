import { Component, OnInit, Input } from '@angular/core';
import { ArtServiceService } from '../art-service/art-service.service';
// import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
  @Input() art
  
  // card;

  // artList;
  constructor(private artService: ArtServiceService) { }

  bgColor(i : number, j : number, x : number) {
    const color = this.art[x].image[i][j]
    return { "background-color": color ? color : "#ffffff" }
  }
  ngOnInit() {
  //  for ( let i = 0; i < this.art.length; i++) {
    //  let card = this.art[i]
    //  console.log(card)
     console.log(this.art)
     
   
// return this.card
}

}
