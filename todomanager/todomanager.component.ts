import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrls: ['./todomanager.component.css']
})
export class TodomanagerComponent {
  newTask: string = '';
  todoList: string[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.todoList.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.todoList.splice(index, 1);
  }
}
