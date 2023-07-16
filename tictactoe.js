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

function gameArrayOnDisplay(array) {
    for (let i = 0; i < array.length; i++) {
        gameGrid[i].innerHTML = array[i]
    };
}


// let array = ['O','X','','O','X','O','','X',''];

// gameArrayOnDisplay(array);

var gameCounter = 0;




for (let i = 0; i < gameGrid.length; i++) {

    gameGrid[i].addEventListener('click', function(){
        
        if (gameboard.boardArray[i] == ''){
        
            if (gameCounter%2 == 0){
                // console.log('Even')
                gameboard.boardArray[i] = 'X';
                gameArrayOnDisplay(gameboard.boardArray);
                gameCounter += 1;
            } else {
                console.log('Odd')
                // gameboard.boardArray[i] = 'O';
                gameArrayOnDisplay(gameboard.boardArray);
                gameCounter += 1;
            }
        }
    })
}
