import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', loadComponent: () => import('./login/login.component').then(comp=> comp.LoginComponent)},
  {path: 'home', loadComponent: () => import('./home/home.component').then(comp=> comp.HomeComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
