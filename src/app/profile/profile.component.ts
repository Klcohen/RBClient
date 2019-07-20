import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { UserService} from '../users/user.service'
import { getDefaultService } from 'selenium-webdriver/edge';
import { SignUpComponent} from '../sign-up/sign-up.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../users/user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  bio = localStorage.getItem('bio')
  username = localStorage.getItem('username')
  id = localStorage.getItem('id')


  constructor(private userService: UserService, public dialog: MatDialog) { }

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

  ngOnInit() {
    // let OwnerId = localStorage.getItem('id')
    // this.userService.getUser(OwnerId).subscribe(data => {
    //   localStorage.setItem('bio', data.bio);
    //   localStorage.setItem('username', data.username)
    //   localStorage.setItem('id', data.id)
    //   console.log()
    //   return data
    // })
  }


  logout(){
    localStorage.setItem('token', "")
    alert("you've been logged out!")
    console.log("session token cleared")
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
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
