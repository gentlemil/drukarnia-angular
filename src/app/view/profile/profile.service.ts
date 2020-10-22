import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  api_url = 'http://localhost:3000/users/'

  getUserProfile() {
    return this.http.get<User>(this.api_url + '1')
  }

  constructor(private http: HttpClient) { }


}
