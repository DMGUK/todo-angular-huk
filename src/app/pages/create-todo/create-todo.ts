import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-todo.html',
  styleUrls: ['./create-todo.scss']
})
export class CreateTodo {
  todo = { title: '', description: '' };

  constructor(private todoService: TodoService, private router: Router) {}

  onSubmit(): void {
    this.todoService.createTodo(this.todo).subscribe(() => {
      this.router.navigate(['/todos']);
    });
  }
}
