import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReservationComponent } from './view/reservation/reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileModule } from './view/profile/profile.module';
import { ProfileBarComponent } from './component/profile-bar/profile-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    NavbarComponent,
    ProfileBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
