import { Component } from '@angular/core';

@Component({
  selector: 'app-showusername',
  templateUrl: './showusername.component.html',
  styleUrls: ['./showusername.component.css']
})
export class ShowusernameComponent {
  username: string = '';
  displayedUsername: string | null = null;

  showUsername() {
    this.displayedUsername = this.username;
  }
}
