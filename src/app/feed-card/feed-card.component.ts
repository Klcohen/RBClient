import { Component, OnInit, Input } from '@angular/core';
// import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
  @Input() art

  card;
  
  constructor() { }

  ngOnInit() {
   for ( let i = 0; i < this.art.length; i++) {
     let card = this.art[i]
     console.log(card)
   }

  }
}
