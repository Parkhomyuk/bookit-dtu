import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './main/content/content.component';
import { DashboardComponent } from './main/content/dashboard/dashboard.component';


const routes: Routes = <Routes>[
  {path: '', component: ContentComponent, children:[
    {path:'', component: DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
