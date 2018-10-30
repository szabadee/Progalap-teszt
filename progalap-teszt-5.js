let array = ['up', 'down', 'right', 'left'];

const decide = () => {
  switch (array[1]) {
    case 'up':
      console.log('move up');
      break;
    case 'down':
      console.log('move down');
      break;
    case 'right':
      console.log('move right');
      break;
    case 'left':
      console.log('move left');
      break;
    default:
      console.log('nothing');
  }
};

decide();
