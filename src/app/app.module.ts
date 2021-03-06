import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedCardPersonalComponent, EditTitleBox } from './feed-card-personal/feed-card-personal.component';
import { CommentsComponent } from './comments/comments.component';
import { ProfileComponent, EditBioBox } from './profile/profile.component';
import { JournalComponent } from './journal/journal.component';
import { ArtCreateComponent } from './art-create/art-create.component';
import { PostButtonComponent } from './post-button/post-button.component';
import { InspireButtonComponent } from './inspire-button/inspire-button.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FeedComponent } from './feed/feed.component';
import { CommentService } from './services/comment.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule }   from '@angular/forms';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MatDialogModule } from '@angular/material';
import { UserCardComponent } from './user-card/user-card.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    FeedCardComponent,
    CommentsComponent,
    ProfileComponent,
    JournalComponent,
    ArtCreateComponent,
    PostButtonComponent,
    InspireButtonComponent,
    FeedComponent,
    FeedCardPersonalComponent,
    SignInComponent,
    SignUpComponent,
    EditBioBox,
    EditTitleBox,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,


  ],
  entryComponents:[EditBioBox, EditTitleBox],
  providers: [CommentService, AuthGuardService, AuthService, JwtHelperService,{provide:JWT_OPTIONS,useValue:JWT_OPTIONS}],
  bootstrap: [AppComponent],

})
export class AppModule { }
