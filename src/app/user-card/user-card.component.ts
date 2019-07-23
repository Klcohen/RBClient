import { Component, OnInit, Inject,  Input  } from '@angular/core';
import { UserService} from '../users/user.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ArtServiceService } from '../art-service/art-service.service';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() users

  constructor(private userService: UserService, public dialog: MatDialog, private artService: ArtServiceService) { }

  ngOnInit() {

       console.log(this.users)

  }

}