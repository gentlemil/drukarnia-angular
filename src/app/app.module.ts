import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReservationComponent } from './view/reservation/reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileModule } from './view/profile/profile.module';
import { ProfileBarComponent } from './component/profile-bar/profile-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { MenuComponent } from './view/menu/menu.component';
import { ContactComponent } from './view/contact/contact.component';
import { HomeComponent } from './view/home/home.component';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './view/todos/todos.module';
@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    NavbarComponent,
    ProfileBarComponent,
    PageNotFoundComponent,
    MenuComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileModule,
    RouterModule,
    AuthModule,
    TodosModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
