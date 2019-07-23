import { Component, OnInit, Inject,  Input  } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { UserService} from '../users/user.service'
import { getDefaultService } from 'selenium-webdriver/edge';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ArtServiceService } from '../art-service/art-service.service';
import { Title } from '../art-service/art-service'

@Component({
  selector: 'app-feed-card-personal',
  templateUrl: './feed-card-personal.component.html',
  styleUrls: ['./feed-card-personal.component.css']
})
export class FeedCardPersonalComponent implements OnInit {
  @Input() art
title;
  constructor(private userService: UserService, public dialog: MatDialog, private artService: ArtServiceService) { }

  openDialog(x: number): void {
    let postId = this.art[x].id;
    let title = this.art[x].title;
    localStorage.setItem('postId', postId)
    const dialogRef = this.dialog.open(EditTitleBox, {
      width: '250px',
      data: {title: title}
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.title = result;
    });
  }

  deletePost(x: number){
    
    let postId = this.art[x].id
    console.log(postId)
    this.artService.deleteArt(postId).subscribe()
    alert("youve deleted your post.. shame")
    window.location.reload();
  }

  bgColor(i : number, j : number, x : number) {
    const color = this.art[x].image[i][j]
    return { "background-color": color ? color : "#ffffff" }
  }

  ngOnInit() {

       console.log(this.art)

  }

}

@Component({
  selector: 'EditTitleBox',
  templateUrl: 'EditTitleBox.html',
})
export class EditTitleBox {
  TitleEdit = new FormGroup({
    title: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<EditTitleBox>,
    @Inject(MAT_DIALOG_DATA) public data: Title, private artService: ArtServiceService) {}

    onSubmit(){
      let title = {art: {title:this.TitleEdit.value.title}}
      let postId = localStorage.getItem("postId")

      this.artService.editArt(title, postId).subscribe(data =>
        console.log(data))
        alert("your title has been updated! Your updated title will appear next time you log in!")

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

