import goblin from '../img/goblin.png';

export default class Goblin {
  constructor() {
    this.img = new Image();
    this.img.src = goblin;
    this.img.dataset.name = 'goblin';
  }
}
