import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonalDetailService } from '../../services/personal-detail/personal-detail.service';
import { PersonalDetail } from '../../interfaces/personal-detail.interface';
import { ProjectService } from '../../services/project/project.service';
import { Project } from '../../interfaces/project.interface';
import { Typelogement } from '../../enum/type-logement.enum';
import { TotalPipe } from '../../pipes/total.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-effy-infos',
  templateUrl: './page-effy-infos.component.html',
  styleUrls: ['./page-effy-infos.component.scss'],
})
export class PageEffyInfosComponent implements OnInit, OnDestroy {

  public userName: string;
  public userProject: Project[] = [];
  public typeLogement = Typelogement;
  public unsubscribe: Subscription;
  public helpAccepted: boolean = false;
  public helpFromEffy: number;

  constructor(
    private personalService: PersonalDetailService,
    private projectService: ProjectService,
    private totalPipe: TotalPipe
  ) { }

  ngOnInit(): void {
    this.getUserInfos();
    this.getUserProject();
  }

  calculatingHelp(project: Project) {
    this.helpFromEffy = this.totalPipe.transform(project);
    if (this.helpFromEffy >= 0) {
      this.helpAccepted = true;
    }
  }

  getUserInfos() {
    this.unsubscribe = this.personalService.getUserDetails().subscribe((res: PersonalDetail[]) => {
      this.userName = res[0].civilite + ' ' + res[0].nom + ' ' + res[0].prenom;
    })
  }

  getUserProject() {
    this.unsubscribe = this.projectService.getUserProjects().subscribe((res: Project[]) => {
      this.userProject = res;
      this.calculatingHelp(res[0]);
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

}
