import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtCreateComponent } from './art-create/art-create.component'
import { FeedComponent } from './feed/feed.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  { path: 'home', component: ArtCreateComponent},
  { path: 'feed', component: FeedComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
