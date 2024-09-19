import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrls: ['./usergreeting.component.css']
})
export class UsergreetingComponent {
  name: string = '';
  greeting: string | null = null;

  generateGreeting() {
    if (this.name.trim()) {
      this.greeting = `Hello, ${this.name}!`;
    } else {
      this.greeting = null;
    }
  }
}
