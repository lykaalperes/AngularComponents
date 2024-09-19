import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationcheckerComponent } from './multiplicationchecker.component';

describe('MultiplicationcheckerComponent', () => {
  let component: MultiplicationcheckerComponent;
  let fixture: ComponentFixture<MultiplicationcheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiplicationcheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplicationcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
