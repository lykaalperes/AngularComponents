import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-stopwatch',
  templateUrl: './simple-stopwatch.component.html',
  styleUrls: ['./simple-stopwatch.component.css']
})
export class SimpleStopwatchComponent {
  private timer: any;
  public seconds: number = 0;
  public running: boolean = false;

  start() {
    if (!this.running) {
      this.running = true;
      this.timer = setInterval(() => {
        this.seconds++;
      }, 1000);
    }
  }

  stop() {
    this.running = false;
    clearInterval(this.timer);
  }

  reset() {
    this.stop();
    this.seconds = 0;
  }

  get formattedTime() {
    const minutes = Math.floor(this.seconds / 60);
    const secs = this.seconds % 60;
    return `${this.pad(minutes)}:${this.pad(secs)}`;
  }

  private pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
