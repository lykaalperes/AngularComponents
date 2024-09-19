import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-number-trivia',
  templateUrl: './number-trivia.component.html',
  styleUrls: ['./number-trivia.component.css']
})
export class NumberTriviaComponent {
  number: number | null = null;
  trivia: string | null = null;
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  getNumberTrivia() {
    if (this.number !== null) {
      this.errorMessage = null;

      this.http.get<any>(`http://numbersapi.com/${this.number}?json`).subscribe(
        (response) => {
          this.trivia = response.text;
        },
        (error) => {
          this.trivia = null;
          this.errorMessage = 'Could not fetch trivia. Please try another number.';
        }
      );
    }
  }
}
