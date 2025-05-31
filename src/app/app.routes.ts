import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Todos } from './pages/todos/todos';
import { CreateTodo } from './pages/create-todo/create-todo';
import { EditTodo } from './pages/edit-todo/edit-todo';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'todos', component: Todos },
  { path: 'todos/create', component: CreateTodo },
  { path: 'todos/:id/edit', component: EditTodo },
  { path: '**', redirectTo: '' }
];

