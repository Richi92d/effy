import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'parcours', loadChildren: () => import('./effy/effy.module').then(m => m.EffyModule) },
  { path: '', redirectTo: 'parcours', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
