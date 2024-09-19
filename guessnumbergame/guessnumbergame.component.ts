import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrls: ['./guessnumbergame.component.css']
})
export class GuessnumbergameComponent {
  randomNumber: number = Math.floor(Math.random() * 100) + 1;
  userGuess: number | null = null;
  message: string = '';
  attempts: number = 0;

  checkGuess() {
    if (this.userGuess !== null) {
      this.attempts++;
      if (this.userGuess < this.randomNumber) {
        this.message = 'Too low!';
      } else if (this.userGuess > this.randomNumber) {
        this.message = 'Too high!';
      } else {
        this.message = `Correct! You guessed the number in ${this.attempts} attempts.`;
      }
    }
  }

  resetGame() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.userGuess = null;
    this.message = '';
    this.attempts = 0;
  }
}
