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
                document.querySelector('div.result').innerHTML = checkWinner(gameboard.boardArray);
                gameCounter += 1;
            } else {
                // console.log('Odd')
                gameboard.boardArray[i] = 'O';
                gameArrayOnDisplay(gameboard.boardArray);
                document.querySelector('div.result').innerHTML = checkWinner(gameboard.boardArray);
                gameCounter += 1;
            }
        }
    })
}

let winnerCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let running = true;


function checkWinner(array){

    let roundWon = false;

    for(let i = 0; i < winnerCombos.length; i++){
        let condition = winnerCombos[i];

        let gridA = array[condition[0]];
        let gridB = array[condition[1]];
        let gridC = array[condition[2]];

        if (gridA == ''|| gridB == ''||gridC == ''){
            continue;
        }

        if (gridA == gridB && gridB == gridC){
            roundWon = true;
            break
        }

    }

    if (roundWon){
        if (gameCounter%2 == 0){
            return 'X won';
        } else{
            return 'O Won';
        }
    }else if (gameCounter == 8) {
        return 'Draw';
    } else{
        return ''
    }

}
