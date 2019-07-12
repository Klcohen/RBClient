import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtCreateComponent } from './art-create/art-create.component'
import { FeedComponent } from './feed/feed.component'
import { ProfileComponent } from './profile/profile.component'
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'home', component: ArtCreateComponent},
  { path: 'feed', component: FeedComponent},
  {path: 'profile', component: ProfileComponent}
  {path: 'Sign In/ Up', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
