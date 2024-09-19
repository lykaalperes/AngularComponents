import { Component } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  newTask: string = '';
  todos: Todo[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.todos.push({ task: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  toggleTaskCompletion(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
