import { DIRECTIONS, KEYS } from './constants';

const characterSpeed = 1;
const characterCoordinates = {
  x: 0,
  y: 0,
};
const inputDirections: DIRECTIONS[] = [];

const moveCharacter = () => {
  const character = document.querySelector('.character');
  const heldDirection = inputDirections[0];

  if (heldDirection && character) {
    switch (heldDirection) {
      case DIRECTIONS.RIGHT:
        characterCoordinates.x += characterSpeed;
        break;
      case DIRECTIONS.LEFT:
        characterCoordinates.x -= characterSpeed;
        break;
      case DIRECTIONS.DOWN:
        characterCoordinates.y += characterSpeed;
        break;
      case DIRECTIONS.UP:
        characterCoordinates.y -= characterSpeed;
        break;
    }
  }

  if (character instanceof HTMLElement) {
    character.setAttribute('walking', heldDirection ? 'true' : 'false');
    character.style.transform = `translate3d( ${characterCoordinates.x}px, ${characterCoordinates.y}px, 0 )`;
  }
};

const step = () => {
  moveCharacter();
  window.requestAnimationFrame(() => {
    step();
  });
};

document.addEventListener('keydown', e => {
  const direction = KEYS[e.code as keyof typeof KEYS];

  if (direction && inputDirections.indexOf(direction) === -1) {
    inputDirections.unshift(direction);
  }
});

document.addEventListener('keyup', e => {
  const direction = KEYS[e.code as keyof typeof KEYS];
  const index = inputDirections.indexOf(direction);

  if (index > -1) {
    inputDirections.splice(index, 1);
  }
});

export { step };
