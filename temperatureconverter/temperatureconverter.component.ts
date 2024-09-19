import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrls: ['./temperatureconverter.component.css']
})
export class TemperatureconverterComponent {
  temperature: number | null = null;
  convertedTemperature: number | null = null;
  convertTo: string = 'F';

  convertTemperature() {
    if (this.temperature !== null) {
      if (this.convertTo === 'F') {
        this.convertedTemperature = (this.temperature * 9/5) + 32;
      } else {
        this.convertedTemperature = (this.temperature - 32) * 5/9;
      }
    }
  }
}
