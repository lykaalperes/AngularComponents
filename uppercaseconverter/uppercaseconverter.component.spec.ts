import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercaseconverterComponent } from './uppercaseconverter.component';

describe('UppercaseconverterComponent', () => {
  let component: UppercaseconverterComponent;
  let fixture: ComponentFixture<UppercaseconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UppercaseconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppercaseconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
