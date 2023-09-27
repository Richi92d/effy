import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffyRoutingModule } from './effy-routing.module';
import { PageEffyComponent } from './components/page-effy/page-effy.component';
import { PageEffyUserComponent } from './components/page-effy-user/page-effy-user.component';
import { PageEffyProjectComponent } from './components/page-effy-project/page-effy-project.component';
import { PageEffyInfosComponent } from './components/page-effy-infos/page-effy-infos.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { PersonalDetailService } from './services/personal-detail/personal-detail.service';
import { ProjectService } from './services/project/project.service';
import { ProjectCostPipe } from './pipes/project-cost.pipe';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [
    PageEffyComponent,
    PageEffyUserComponent,
    PageEffyProjectComponent,
    PageEffyInfosComponent,
    ProjectCostPipe,
    TotalPipe
  ],
  imports: [
    CommonModule,
    EffyRoutingModule,
    SharedModule,

    //rxjs
    ReactiveFormsModule,
    FormsModule,

    // angular material
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [
    PersonalDetailService,
    ProjectService,
    ProjectCostPipe,
    TotalPipe
  ]
})
export class EffyModule { }
