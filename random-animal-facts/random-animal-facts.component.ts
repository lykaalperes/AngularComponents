import { Component } from '@angular/core';

@Component({
  selector: 'app-random-animal-facts',
  templateUrl: './random-animal-facts.component.html',
  styleUrls: ['./random-animal-facts.component.css']
})
export class RandomAnimalFactsComponent {
  animalFacts: string[] = [
    'Gorillas can catch human colds and other illnesses.',
    'A newborn Chinese water deer is so small it can almost be held in the palm of the hand.',
    'Ostriches can run faster than horses, and the males can roar like lions.',
    'A lion in the wild usually makes no more than twenty kills a year.',
    'The female lion does ninety percent of the hunting.',
    'The world’s smallest dog was a Yorkshire Terrier, which weighed just four ounces.',
    'Turtles, water snakes, crocodiles, alligators, dolphins, whales, and other water-going creatures will drown if kept underwater too long.',
    'Almost half the pigs in the world are kept by farmers in China.',
    'On average, dogs have better eyesight than humans, although not as colorful.',
    'Deer have no gall bladders.',
    'There is an average of 50,000 spiders per acre in green areas.',
    'Snakes are carnivores, which means they only eat animals, often small ones such as insects, birds, frogs, and other small mammals.',
    'In Alaska, it is illegal to whisper in someone’s ear while they’re moose hunting.',
    'The bat is the only mammal that can fly.',
    'The leg bones of a bat are so thin that out of the 1,200 species of bats, only 2 can walk on the ground: the Vampire bat and the Burrowing bat.',
    'Some male songbirds sing more than 2,000 times each day.',
    'The only mammals to undergo menopause are elephants, humpback whales, and human females.',
    'Blue-eyed lemurs are one of two (non-human) primates to have truly blue eyes.',
    'A tarantula spider can survive for more than two years without food.',
    'For every human in the world, there are one million ants.',
    'If you lift a kangaroo’s tail off the ground, it can’t hop – they use their tails for balance.',
    'If you keep a goldfish in a dark room, it will become pale!',
    'Cows can sleep standing up, but they can only dream lying down.',
    'The sentence “The quick brown fox jumps over a lazy dog.” uses every letter of the alphabet.',
    'The average fox weighs 14 pounds.',
    'The scientific name of the red fox is Vulpes vulpes.',
    'Alligators generally live between 30 & 50 years.',
    'A single elephant tooth can weigh as much as 9 pounds.',
    'The turkey is one of the most famous birds in North America.',
    'A housefly hums in the key of F.',
    'During World War II, Americans tried to train bats to drop bombs.',
    'Canis lupus lupus is the scientific name for a grey wolf.',
    'To escape the grip of a crocodile’s jaw, push your thumb into its eyeballs – it will let you go instantly.',
    'It is much easier for dogs to learn spoken commands if they are given in conjunction with hand signals or gestures.',
    'Even a small amount of alcohol placed on a scorpion will make it go crazy and sting itself to death!',
    'Male rabbits are called “bucks,” and females are “does.”',
    'The flamingo can only eat when its head is upside down.',
    'Animals generate 30 times more waste than humans, which is 1.4 billion tons every year.',
    'Ants never sleep. Also, they don’t have lungs.',
    'A group of owls is called a parliament.',
    'Just one cow gives off enough harmful methane gas in a single day to fill around 400 liter bottles.',
    'Pear and apple seeds contain arsenic, which may be deadly to dogs.',
    'Cows have one large stomach that is divided into four compartments to go through the different stages of digestion.',
    'An anteater is nearly 6 feet long, yet its mouth is only an inch wide.',
    'The blue whale weighs as much as thirty elephants and is as long as three Greyhound buses.',
    'A herd of sixty cows is capable of producing a ton of milk in less than a day.',
    'A grasshopper can leap 20 times the length of its own body.',
    'At birth, baby kangaroos are only about an inch long – no bigger than a large water bug or a queen bee.',
    'The smell of a skunk can be detected by a human a mile away.',
    'There is a butterfly in Africa with enough poison in its body to kill six cats!'
  ];

  currentFact: string = '';

  getRandomFact() {
    const randomIndex = Math.floor(Math.random() * this.animalFacts.length);
    this.currentFact = this.animalFacts[randomIndex];
  }
}
