import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';

import { ArtCreateComponent } from './art-create/art-create.component'
import { FeedComponent } from './feed/feed.component'
import { ProfileComponent } from './profile/profile.component'
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CanActivate } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: ArtCreateComponent},
  { path: 'feed', component: FeedComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {path: 'Sign In', component: SignInComponent},
  {path: 'Sign Up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
