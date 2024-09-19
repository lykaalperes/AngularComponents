import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  templateUrl: './showdate.component.html',
  styleUrls: ['./showdate.component.css']
})
export class ShowdateComponent {
  currentDateTime: string | null = null;

  showDateTime() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
  }
}
