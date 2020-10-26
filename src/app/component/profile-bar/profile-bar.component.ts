import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ProfileService } from 'src/app/view/profile/profile.service';

@Component({
  selector: 'app-profile-bar',
  templateUrl: './profile-bar.component.html',
  styleUrls: ['./profile-bar.component.scss']
})
export class ProfileBarComponent implements OnInit {

  profile: User;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUserProfile()
    .subscribe(user => {
      this.profile = user;
    })
  }

}
