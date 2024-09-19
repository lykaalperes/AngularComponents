import { Component } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrls: ['./displayname.component.css']
})
export class DisplaynameComponent {
  name: string = '';
  displayedName: string | null = null;

  display() {
    this.displayedName = this.name;
  }
}
