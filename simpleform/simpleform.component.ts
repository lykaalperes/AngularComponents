import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent {
  name: string = '';
  email: string = '';
  submittedData: { name: string; email: string } | null = null;

  onSubmit() {
    this.submittedData = { name: this.name, email: this.email };
  }
}
