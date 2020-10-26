import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';
import { ConnectableObservable, Subject } from 'rxjs';
import { multicast, refCount, share } from 'rxjs/operators';
// import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  api_url = 'http://localhost:3000/users/'

  user_request = this.http
    .get<User>(this.api_url + '2')
    .pipe(
      // multicast(new Subject<User>()),
      // refCount()
      share()
  )

  getUserProfile() {
    return this.user_request;
  }

  constructor(private http: HttpClient) {
    // (<ConnectableObservable<User>>this.user_request).connect()
  }


}
