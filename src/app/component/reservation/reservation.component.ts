import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonalInformationDto, ReservationDetailsDto } from '../../../model/model';
// check when can I use path '@model/model'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  reservationModel: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
