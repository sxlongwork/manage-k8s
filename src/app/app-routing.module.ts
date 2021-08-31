import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '**', redirectTo: 'login'},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
