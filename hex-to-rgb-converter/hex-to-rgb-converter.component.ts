import { Component } from '@angular/core';

@Component({
  selector: 'app-hex-to-rgb-converter',
  templateUrl: './hex-to-rgb-converter.component.html',
  styleUrls: ['./hex-to-rgb-converter.component.css']
})
export class HexToRgbConverterComponent {
  hexCode: string = '';
  rgbResult: string | null = null;

  convertHexToRgb() {
    const hex = this.hexCode.trim();

    if (this.isValidHex(hex)) {
      let r: number, g: number, b: number;

      if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
      } else {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
      }

      this.rgbResult = `RGB(${r}, ${g}, ${b})`;
    } else {
      this.rgbResult = null;
    }
  }

  isValidHex(hex: string): boolean {
    return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
  }
}
