import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: User;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUserProfile()
    .subscribe(user => {
      this.profile = user;
    })
  }

}
