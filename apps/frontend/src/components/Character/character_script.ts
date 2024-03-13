import { DIRECTIONS, KEYS } from './constants';

const characterSpeed = 5;
const characterCoordinates = {
  x: 0,
  y: 0,
};
const inputDirections: DIRECTIONS[] = [];

const checkCollision = (character: HTMLDivElement) => {
  const allCodeBlocksAndSlots = [
    ...document.querySelectorAll('.code-block'),
    ...document.querySelectorAll('.block-slot'),
  ];

  if (character instanceof HTMLElement) {
    const characterRect = character.getBoundingClientRect();

    for (const codeBlock of allCodeBlocksAndSlots) {
      const codeBlockRect = codeBlock.getBoundingClientRect();

      if (
        characterRect.right >= codeBlockRect.left &&
        characterRect.left <= codeBlockRect.right &&
        characterRect.bottom >= codeBlockRect.top &&
        characterRect.top <= codeBlockRect.bottom
      ) {
        allCodeBlocksAndSlots.forEach(codeBlock => codeBlock.classList.remove('collision'));
        codeBlock.classList.add('collision');
        return codeBlock;
      }
      codeBlock.classList.remove('collision');
    }
  }

  return null;
};

const pickUpCodeBlock = (character: HTMLDivElement) => {
  const collidedElement = checkCollision(character) as HTMLElement;

  if (collidedElement && collidedElement.classList.contains('code-block')) {
    character.dataset.carriedCodeBlock = collidedElement.id;
    collidedElement.style.visibility = 'hidden';
  }
};

const dropCodeBlock = (character: HTMLDivElement) => {
  const carriedCodeBlock = document.getElementById(character.dataset.carriedCodeBlock || '');
  const collidedElement = checkCollision(character);

  delete character.dataset.carriedCodeBlock;

  if (carriedCodeBlock) {
    const offsetFromElement =
      collidedElement && collidedElement?.classList?.contains('block-slot') ? collidedElement : character;

    const offsetFromElementRec = offsetFromElement.getBoundingClientRect();
    const offsetFromElementOffsetX = (offsetFromElementRec.left / window.innerWidth) * 100;
    const offsetFromElementOffsetY = (offsetFromElementRec.top / window.innerHeight) * 100;

    carriedCodeBlock.style.top = offsetFromElementOffsetY + '%';
    carriedCodeBlock.style.left = offsetFromElementOffsetX + '%';

    carriedCodeBlock.style.position = 'absolute';
    carriedCodeBlock.style.visibility = 'visible';
  }
};

const moveCharacter = (character: HTMLDivElement) => {
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

  character.setAttribute('walking', heldDirection ? 'true' : 'false');
  character.style.transform = `translate3d( ${characterCoordinates.x}px, ${characterCoordinates.y}px, 0 )`;
};

const step = () => {
  const character = document.querySelector('.character');

  if (character instanceof HTMLDivElement) {
    moveCharacter(character);
    checkCollision(character);
  }

  window.requestAnimationFrame(() => {
    step();
  });
};

document.addEventListener('keydown', e => {
  const character = document.querySelector('.character');
  const direction = KEYS[e.code as keyof typeof KEYS];

  if (direction && inputDirections.indexOf(direction) === -1) {
    inputDirections.unshift(direction);
  }

  if (e.key === ' ' && character instanceof HTMLDivElement) {
    if (character.dataset.carriedCodeBlock) {
      dropCodeBlock(character);
    } else {
      pickUpCodeBlock(character);
    }
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
