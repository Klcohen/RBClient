import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtCreateComponent } from './art-create/art-create.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
