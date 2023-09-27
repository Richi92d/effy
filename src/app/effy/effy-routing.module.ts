import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageEffyComponent } from './components/page-effy/page-effy.component';
import { PageEffyUserComponent } from './components/page-effy-user/page-effy-user.component';
import { PageEffyProjectComponent } from './components/page-effy-project/page-effy-project.component';
import { PageEffyInfosComponent } from './components/page-effy-infos/page-effy-infos.component';

const routes: Routes = [
  {
    path: '', component: PageEffyComponent,
    children: [
      {
        path: 'informations', component: PageEffyUserComponent
      },
      {
        path: '', redirectTo: 'informations', pathMatch: 'full'
      },
      {
        path: 'project', component: PageEffyProjectComponent
      },
      {
        path: 'detail', component: PageEffyInfosComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EffyRoutingModule { }
