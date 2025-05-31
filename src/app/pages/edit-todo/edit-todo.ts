import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-todo.html',
  styleUrls: ['./edit-todo.scss']
})
export class EditTodo implements OnInit {
  todo: any = { title: '', description: '', isFinished: false };
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.todoService.getTodoById(this.id).subscribe(data => {
      this.todo = data;
    });
  }

  onUpdate(): void {
    this.todoService.updateTodo(this.id, this.todo).subscribe(() => {
      this.router.navigate(['/todos']);
    });
  }
}
