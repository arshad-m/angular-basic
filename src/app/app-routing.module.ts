import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularPipeComponent } from './home/angular-pipe/angular-pipe.component';


const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:"prefix", children:[
    { path: 'pipes', pathMatch: 'full', component: AngularPipeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
