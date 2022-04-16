export default function generateRandomPosition(boardSize, currentPosition) {
  let number = Math.floor(Math.random() * boardSize ** 2);
  if (number === currentPosition) {
    do {
      number = Math.floor(Math.random() * boardSize ** 2);
    } while (number === currentPosition);
  }
  return number;
}
