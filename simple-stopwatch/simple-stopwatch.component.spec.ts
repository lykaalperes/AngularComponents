import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleStopwatchComponent } from './simple-stopwatch.component';

describe('SimpleStopwatchComponent', () => {
  let component: SimpleStopwatchComponent;
  let fixture: ComponentFixture<SimpleStopwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleStopwatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleStopwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
