import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomAnimalFactsComponent } from './random-animal-facts.component';

describe('RandomAnimalFactsComponent', () => {
  let component: RandomAnimalFactsComponent;
  let fixture: ComponentFixture<RandomAnimalFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomAnimalFactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomAnimalFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
