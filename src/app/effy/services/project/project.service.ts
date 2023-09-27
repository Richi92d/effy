import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public url: string = 'http://localhost:4000/project';

  constructor(private http: HttpClient) { }

  getUserProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }

  postProjectDetails(ProjectForm: Project): Observable<Project> {
    return this.http.post<Project>(this.url, ProjectForm);
  }
}
