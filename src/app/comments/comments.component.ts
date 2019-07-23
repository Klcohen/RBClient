import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { FormGroup, FormControl } from '@angular/forms';
import { CommentService } from '../services/comment.service'
import { Comment} from '../services/comment'
import { Art } from '../art-service/art-service';
//import { Comments } from '../services/comment'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentForm = new FormGroup({
    comment: new FormControl('')
  });

  constructor(private commentService: CommentService) { }

  onSubmit(){
    // postId= this.art.id
    // let comment = {comments: {comment: this.commentForm.value.comment}};
    // console.log(postId)
    // this.commentService.addComment(comment, postId).subscribe(data => {
    //   console.log(data)
    // },
    // err => console.log(err)) 
  
    }

  
  ngOnInit(){
   


    }
  }



  