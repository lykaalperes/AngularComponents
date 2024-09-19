import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrls: ['./usernamevalidator.component.css']
})
export class UsernamevalidatorComponent {
  username: string = '';
  isValid: boolean | null = null;
  validationMessage: string = '';

  validateUsername() {
    const minLength = 5;
    const maxLength = 15;
    const usernamePattern = /^[a-zA-Z0-9]+$/;

    if (this.username.length < minLength || this.username.length > maxLength) {
      this.isValid = false;
      this.validationMessage = `Username must be between ${minLength} and ${maxLength} characters long.`;
    } else if (!usernamePattern.test(this.username)) {
      this.isValid = false;
      this.validationMessage = 'Username can only contain alphanumeric characters.';
    } else {
      this.isValid = true;
      this.validationMessage = 'Username is valid.';
    }
  }
}
