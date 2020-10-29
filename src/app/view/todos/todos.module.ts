import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule
  ],
  exports: [TodosComponent],
  providers: [TodosService]
})
export class TodosModule { }
