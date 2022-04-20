export default class Game {
  constructor() {
    this.boardSize = 4;
    this.wrapper = null;
    this.container = null;
    this.board = null;
    this.cell = null;
    this.cells = [];
    this.cellClickListeners = [];
  }

  drawBoard() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');

    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.wrapper.append(this.container);

    this.container.innerHTML = `
    <h1 class="title">Goblin Game</h1>
    <div class="position">
      <div class="position__box">  
      <span data-id="hit">Hit: 0</span>
      <span data-id="missed">Missed: 0</span>
      </div>
      <div data-id="board-container" class="board-container">
        <div data-id="board" class="board"></div>
      </div>
    </div>
   `;

    this.board = this.container.querySelector('[data-id=board]');

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.id = i;
      cell.addEventListener('click', (event) => this.onCellClick(event));
      this.board.appendChild(cell);
    }
    this.cells = Array.from(this.board.children);
    document.body.append(this.wrapper);
  }

  onCellClick(event) {
    const index = this.cells.indexOf(event.currentTarget);
    this.cellClickListeners.forEach((o) => o.call(null, index));
  }

  addCellClickListener(callback) {
    this.cellClickListeners.push(callback);
  }
}
