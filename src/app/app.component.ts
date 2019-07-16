import { Component } from '@angular/core';
import { CommentService } from './services/comment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [CommentService]
})
export class AppComponent {
  title = 'red-badge-project';
}
