import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: "", component:HomeComponent, title: "Strona główna" },
  { path: "home", component:HomeComponent, title: "Strona główna" },
  { path: "users", component:UsersComponent, title: "Użytkownicy" },
  { path: "blog", component:BlogComponent, title: "Blog" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
