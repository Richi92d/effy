import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalDetailService } from '../../services/personal-detail/personal-detail.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription, iif } from 'rxjs';
@Component({
  selector: 'app-page-effy-user',
  templateUrl: './page-effy-user.component.html',
  styleUrls: ['./page-effy-user.component.scss']
})
export class PageEffyUserComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public step: number = 1;
  public unsubscribe: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: PersonalDetailService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      civilite: [null, Validators.required],
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      email: [null, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')],
      tel: null
    });
  }

  checkFormValidity(): boolean {
    return this.form.controls['civilite'].invalid;
  }

  next() {
    this.step = this.step + 1;
  }

  previous() {
    this.step = this.step - 1;
  }

  GoToProject() {
    this.unsubscribe = this.userService.postUserDetails(this.form.value).subscribe(() => {
      this.snackBar.open('les informations sont enregistrés', 'Undo', { duration: 2000 });
      this.router.navigate(['/parcours/project']);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

}
