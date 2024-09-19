import { Component } from '@angular/core';

@Component({
  selector: 'app-emoji-mood-tracker',
  templateUrl: './emoji-mood-tracker.component.html',
  styleUrls: ['./emoji-mood-tracker.component.css']
})
export class EmojiMoodTrackerComponent {
  emojis: string[] = ['😀', '😐', '😢', '😡', '😍', '😎', '🤔'];
  selectedEmoji: string = '';
  moodHistory: string[] = [];

  selectMood(emoji: string) {
    this.selectedEmoji = emoji;
    this.moodHistory.push(emoji);
  }

  clearHistory() {
    this.moodHistory = [];
  }
}
