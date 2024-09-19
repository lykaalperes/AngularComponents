import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiMoodTrackerComponent } from './emoji-mood-tracker.component';

describe('EmojiMoodTrackerComponent', () => {
  let component: EmojiMoodTrackerComponent;
  let fixture: ComponentFixture<EmojiMoodTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmojiMoodTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiMoodTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
