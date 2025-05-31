import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todos.html',
  styleUrls: ['./todos.scss']
})
export class Todos implements OnInit {
  todos: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private todoService: TodoService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos(this.currentPage).subscribe(response => {
      this.todos = response.todos;
      this.totalPages = response.totalPages;
    });
  }

  toggleStatus(todo: any): void {
    const updated = { ...todo, isFinished: !todo.isFinished };
    this.todoService.updateTodoStatus(updated).subscribe(() => {
      this.fetchTodos();
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.fetchTodos();
    });
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.fetchTodos();
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
