import Game from './Game';
import Goblin from './Goblin';
import generateRandomPosition from './generateRandomPosition';

export default class GameController {
  constructor() {
    this.game = new Game();
    this.goblin = new Goblin();
    this.currentPosition = null;
    this.counterHit = 0;
    this.counterMissed = 0;
    this.hitdAlready = false;
    this.missedAlready = false;
  }

  init() {
    this.game.drawBoard();
    this.placeGoblin();
    this.game.addCellClickListener(this.onCellClick.bind(this));
    this.hit = document.querySelector('[data-id="hit"]');
    this.missed = document.querySelector('[data-id="missed"]');
  }

  showImage() {
    const position = generateRandomPosition(
      this.game.boardSize,
      this.currentPosition,
    );

    const futureEl = document.querySelector(`[data-id="${position}"]`);
    futureEl.insertAdjacentElement('beforeend', this.goblin.img);

    this.currentPosition = position;
  }

  onCellClick(index) {
    if (!this.hitAlready) {
      if (this.currentPosition === index) {
        this.counterHit += 1;
        this.hit.textContent = `Hit: ${this.counterHit}`;
        this.hitAlready = true;
      } else if (!this.missedAlready) {
        this.counterMissed += 1;
        this.missed.textContent = `Missed: ${this.counterMissed}`;
        this.missedAlready = true;
      }
    }

    if (this.counterMissed === 5) {
      alert('You lost. Better luck next time');
      this.clearBoard();
    }
  }

  clearBoard() {
    this.counterHit = 0;
    this.counterMissed = 0;
    this.hit.textContent = 'Hit: 0';
    this.missed.textContent = 'Missed: 0';
  }

  clearMemory() {
    this.hitAlready = false;
    this.missedAlready = false;
  }

  placeGoblin() {
    setTimeout(() => {
      this.clearMemory();
      this.showImage();
      this.placeGoblin();
    }, 1000);
  }
}
