import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTriviaComponent } from './number-trivia.component';

describe('NumberTriviaComponent', () => {
  let component: NumberTriviaComponent;
  let fixture: ComponentFixture<NumberTriviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberTriviaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberTriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
