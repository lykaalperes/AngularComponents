import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmisolverComponent } from './bmisolver.component';

describe('BmisolverComponent', () => {
  let component: BmisolverComponent;
  let fixture: ComponentFixture<BmisolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BmisolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmisolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
