import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexToRgbConverterComponent } from './hex-to-rgb-converter.component';

describe('HexToRgbConverterComponent', () => {
  let component: HexToRgbConverterComponent;
  let fixture: ComponentFixture<HexToRgbConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HexToRgbConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexToRgbConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
