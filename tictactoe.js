//gameboard

//Created a gameboard object using module pattern
const gameboard = ( function() {

    const boardArray = ['','','','','','','','',''];

    return {
        boardArray,

    };
})();


//Player factory function
const gamePlayer = (playerName, playerSymbol) => {
    
    return {
        playerName,
        playerSymbol
    }
}

let player1 = gamePlayer('Pranav', 'X');
let player2 = gamePlayer('Kansal', '0');

var gameGrid = document.querySelectorAll('div.griditem');

// gameGrid.forEach(
//     (cell, index) => 
//       cell.textContent=`Cell ${index}`
//   );

function gameArrayOnDisplay(array) {
    for (let i = 0; i < array.length; i++) {
        gameGrid[i].innerHTML = array[i]
    };
}


let array = ['','X','','','X','','','X',''];

gameArrayOnDisplay(array);