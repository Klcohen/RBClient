import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { CommentsComponent } from './comments/comments.component';
import { ProfileComponent } from './profile/profile.component';
import { JournalComponent } from './journal/journal.component';
import { ArtCreateComponent } from './art-create/art-create.component';
import { PostButtonComponent } from './post-button/post-button.component';
import { InspireButtonComponent } from './inspire-button/inspire-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NavbarComponent,
    SearchBarComponent,
    FeedCardComponent,
    CommentsComponent,
    ProfileComponent,
    JournalComponent,
    ArtCreateComponent,
    PostButtonComponent,
    InspireButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
