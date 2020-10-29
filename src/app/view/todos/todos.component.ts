import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  addTodo(title){
    this.todosService.createTodo({
      title
    })
    .subscribe(()=>{
      console.log('success!')
    },err=>{
      
    })
   }

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

}
