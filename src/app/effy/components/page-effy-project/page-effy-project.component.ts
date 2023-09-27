import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../services/project/project.service';
import { Typelogement } from '../../enum/type-logement.enum';

@Component({
  selector: 'app-page-effy-project',
  templateUrl: './page-effy-project.component.html',
  styleUrls: ['./page-effy-project.component.scss']
})
export class PageEffyProjectComponent implements OnInit {

  public form: FormGroup;
  public step: number = 1;
  public unsubscribe: Subscription;
  public typeLogement = Typelogement;

  constructor(private fb: FormBuilder, private router: Router,
    private snackBar: MatSnackBar, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      type: [null, Validators.required],
      nbrPers: null,
      revenu: [null, [Validators.minLength(10000), Validators.maxLength(100000)]],
      surface: null
    });
  }

  GoToDetail() {
    this.unsubscribe = this.projectService.postProjectDetails(this.form.value).subscribe(() => {
      this.snackBar.open('les informations sont enregistrés', 'close');
      this.router.navigate(['/parcours/detail']);
    });
  }

  checkFormValidity(): boolean {
    return this.form.controls['type'].invalid;
  }

  next() {
    this.step = this.step + 1;
  }

  previous() {
    this.step = this.step - 1;
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

}
