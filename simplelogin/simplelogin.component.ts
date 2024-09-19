import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrls: ['./simplelogin.component.css']
})
export class SimpleloginComponent {
  email: string = '';
  password: string = '';
  loginSuccess: boolean | null = null;

  login() {
    if (this.email === 'test@example.com' && this.password === 'password123') {
      this.loginSuccess = true;
    } else {
      this.loginSuccess = false;
    }
  }
}
