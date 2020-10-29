import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, HttpClientModule, AppRoutingModule],
  exports: [ProfileComponent],
  providers: [ProfileService]
})
export class ProfileModule { }
