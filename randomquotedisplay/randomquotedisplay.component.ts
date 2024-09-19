import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrls: ['./randomquotedisplay.component.css']
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. – Mother Teresa",
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that. – Martin Luther King Jr.",
    "Do one thing every day that scares you. – Eleanor Roosevelt",
    "Well done is better than well said. – Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. – Helen Keller",
    "It is during our darkest moments that we must focus to see the light. – Aristotle",
    "Do not go where the path may lead; go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "If life were predictable, it would cease to be life and be without flavor. – Eleanor Roosevelt",
    "In the end, it‘s not the years in your life that count. It’s the life in your years. – Abraham Lincoln",
    "Life is a succession of lessons which must be lived to be understood. – Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. – Maya Angelou",
    "Never let the fear of striking out keep you from playing the game. – Babe Ruth",
    "Life is never fair, and perhaps it is a good thing for most of us that it is not. – Oscar Wilde",
    "The only impossible journey is the one you never begin. – Tony Robbins",
    "In this life, we cannot do great things. We can only do small things with great love. – Mother Teresa",
    "Only a life lived for others is a life worthwhile. – Albert Einstein",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "You may say I‘m a dreamer, but I’m not the only one. I hope someday you'll join us. And the world will live as one. – John Lennon",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    "Don't worry when you are not recognized but strive to be worthy of recognition. – Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela"
  ];

  randomQuote: string | null = null;

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }
}
