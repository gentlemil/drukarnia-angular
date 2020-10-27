import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { PersonalInformationDto, ReservationDetailsDto } from '../../../model/reservation';
// check when can I use path '@model/model'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  reservationModel: FormGroup;

  constructor() {
    // used FormGroup, FormControl and FormArray directives
    // properties used in DOM: formGroupName, formControlName and formArrayName (use only in HTML)
    this.reservationModel = new FormGroup({
      personalInformation: new FormGroup({
        givenName: new FormControl(''),
        familyName: new FormControl(''),
        email: new FormControl(''),
        phoneNumber: new FormControl(''),
      }),
      reservationTitle: new FormControl(''),
      reservationDate: new FormControl(''),
      nrOfGuests: new FormControl(''),
      guestName: new FormArray([ new FormControl() ]),
      roomName: new FormControl(''),
      isCatering: new FormControl(''),
      isInvoice: new FormControl(''),
      additionalInformation: new FormControl(''),

    });

  }

  // used with dynamic adding guests' names
  get guestNameFormArray() {
    return this.reservationModel.get('guestName') as FormArray;
  }

  //used to show value of the form
  get value() {
    return JSON.stringify(this.reservationModel.value, null, 4);
  }

  // used to reset(clean) reservation form
  resetForm() {
    this.reservationModel.patchValue({
      givenName: '',
      familyName: '',
      email: '',
      phoneNumber: '',
      reservationTitle: '',
      reservationDate: '',
      nrOfGuests: '',
      // guestName: '',
      roomName: '',
      isCatering: '',
      isInvoice: '',
      additionalInformation: '',
    })
  }

  // adding new list element with input of guestName
  addGuest() {
    const guestName = this.guestNameFormArray;
    guestName.push(new FormControl());
  }

  onSubmit() {
    console.log(this.reservationModel.value)
  }

  ngOnInit(): void {
  }

}
