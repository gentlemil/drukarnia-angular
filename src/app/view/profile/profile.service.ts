import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../model/user';
import { ConnectableObservable, Subject, BehaviorSubject, Observable } from 'rxjs';
import { filter, map, mapTo, multicast, refCount, share, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { state } from '@angular/animations';
// import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  api_url = 'http://localhost:3000/users/'


  private user_request: Observable<User>

  getUserProfile() {
    if(!this.user_request){
      this.user_request = this.auth.state
      .pipe(
        filter(state => this.auth.isAuthenticated),
        map(() => this.auth.getCurrentUser()),
      )
    }
    return this.user_request
  }

  clearCache(){
    this.user_request = null;
  }

  constructor(private http: HttpClient, private auth: AuthService) { }

  getProfiles(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users/')
  }

  getProfile(id: string): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users/' + id)
  }


}
