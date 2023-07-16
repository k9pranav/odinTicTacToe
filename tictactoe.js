//gameboard

//Created a gameboard object using module pattern
const gameboard = ( function() {

    const boardArray = ['','','','','','','','',''];

    return {
        boardArray,

    };
});


//Player factory function
const gamePlayer = (playerName, playerSymbol) => {
    
    return {
        playerName,
        playerSymbol
    }
}

let player1 = gamePlayer('Pranav', 'X')

let player2 = gamePlayer('Kansal', '0')
