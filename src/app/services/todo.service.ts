import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = `${environment.apiUrl}/todos`;

  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`, { withCredentials: true });
  }

  getTodos(page: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?page=${page}`, { withCredentials: true });
  }

  getTodoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`, { withCredentials: true });
  }

  createTodo(todo: { title: string; description: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}`, todo, { withCredentials: true });
  }

  updateTodo(id: number, todo: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, todo, { withCredentials: true });
  }

  updateTodoStatus(todo: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${todo.id}/status`, { isFinished: todo.isFinished }, { withCredentials: true });
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { withCredentials: true });
  }
}
