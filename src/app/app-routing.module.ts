import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {path:'about', component: AboutComponent}
 ,{path:'todolist', component: TodolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

