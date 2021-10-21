
const { createNumberArray, getRandomNumber } = require('./utils');

function checkWin(switchDoor) {
    const NUMBER_OF_DOORS = 3;

    const doors = createNumberArray(NUMBER_OF_DOORS);
    const hasCar = getRandomNumber(NUMBER_OF_DOORS);
    const selected = getRandomNumber(NUMBER_OF_DOORS);
    const revealed = doors.find((door) => door !== hasCar && door !== selected);
  
    if (switchDoor) {
      return (
        hasCar === doors.find((door) => door !== selected && door !== revealed)
      );
    } else {
      return hasCar === selected;
    }
  }
  
  function simulateGames(simulations, switchDoor) {
    let gamesWon = 0;
  
    for (let i = 0; i < simulations; i++) {
      gamesWon += checkWin(switchDoor) ? 1 : 0
    }
  
    return {
        wins: gamesWon,
        losses: simulations - gamesWon
    };
  }

  module.exports = simulateGames;