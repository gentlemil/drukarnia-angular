import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Todo } from '../../../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  
  url = 'http://localhost:3000/todos';

  createTodo(todo:Partial<Todo>) {
    return this.http.post<Todo>(this.url, todo , {
      headers: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    })

  }

  constructor(private http: HttpClient, private auth: AuthService) { }
}
