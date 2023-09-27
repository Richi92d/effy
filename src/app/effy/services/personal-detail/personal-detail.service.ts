import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalDetail } from '../../interfaces/personal-detail.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailService {

  public url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<PersonalDetail[]> {
    return this.http.get<PersonalDetail[]>(this.url);
  }

  postUserDetails(userForm: PersonalDetail): Observable<PersonalDetail> {
    return this.http.post<PersonalDetail>(this.url, userForm);
  }
}