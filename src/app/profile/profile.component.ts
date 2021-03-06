import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { UserService} from '../users/user.service'
import { getDefaultService } from 'selenium-webdriver/edge';
import { SignUpComponent} from '../sign-up/sign-up.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../users/user';
import { FormGroup, FormControl } from '@angular/forms';
import { ArtServiceService } from '../art-service/art-service.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  bio = localStorage.getItem('bio')
  username = localStorage.getItem('username')
  id = localStorage.getItem('id')
  
  artList=[];
  userList=[];

  constructor(private userService: UserService, public dialog: MatDialog, private artService: ArtServiceService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditBioBox, {
      width: '250px',
      data: {bio: this.bio}
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.bio = result;
    });
  }

  art;
  artTitle = localStorage.getItem('title')
  userId = localStorage.getItem("id") 

  // ngOnInit() {
    
  //   this.artService.getArtMine().subscribe(data => {
  //     localStorage.setItem('post', data[0].title.value);
  //     console.log(data)
      
  //       console.log(data)
  //       this.art = data;

  //   })
    ngOnInit() {
      this.artService.getArtMine().subscribe(art =>{
  
        this.artList.push(art.reverse());
    }
      )
      // let postId = 9
      // this.commentService.getComment(postId).subscribe()
      if( this.userId === "1"){

        this.userService.getUserAll().subscribe(users =>{
          this.userList.push(users)
        })
     
      }

  }
  // deletePost(){

  //   let postId = this.art
  //   console.log(postId)
  //   // this.artService.deleteArt(postId).subscribe()
  //   // alert("your account has been deleted once you logout you'll have to make a new one")
  //   // window.location.reload();
  // }



  logout(){
    localStorage.setItem('token', "")
    alert("you've been logged out!")
    console.log("session token cleared")
    window.location.reload();
  }

  deleteUser(){

    let ownerId = localStorage.getItem('id')

    this.userService.deleteUser(ownerId).subscribe()
    alert("your account has been deleted once you logout you'll have to make a new one")
    window.location.reload();
  }
}
@Component({
  selector: 'EditBioBox',
  templateUrl: 'EditBioBox.html',
})
export class EditBioBox {
  bioEdit = new FormGroup({
    bio: new FormControl('')
  });
  id = localStorage.getItem('id')

  constructor(
    public dialogRef: MatDialogRef<EditBioBox>,
    @Inject(MAT_DIALOG_DATA) public data: User, private userService: UserService) {}

    onSubmit(){
      let bio = {user: {bio:this.bioEdit.value.bio}}
      let ownerId = localStorage.getItem('id')

      this.userService.editUser(bio, ownerId).subscribe(data =>
        console.log(data))
        window.location.reload();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}