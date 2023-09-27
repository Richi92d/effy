import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// composant
import { ButtonComponent } from './composants/button/button.component';
// template
import { HeaderComponent } from './templates/header/header.component';
import { CardComponent } from './templates/card/card.component';
// angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomepageComponent } from './templates/homepage/homepage.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    CardComponent,
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  exports: [
    HomepageComponent,
    HeaderComponent,
    ButtonComponent,
    CardComponent,
  ]
})
export class SharedModule { }
