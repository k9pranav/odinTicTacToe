winnerFound = false

function checkWinnerinRow(num, array){
    if (array[num] == array[num+1] && array[num+1] == array[num+2] && array[num] != ''){
        if(array[num] == 'X'){
            return 'X won';
            winnerFound = true;
        } else{
            return 'O won';
            winnerFound = true;
        }
    }
}

function checkWinnerinCol(num, array){
    if (array[num] == array[num+3] && array[num+3] == array[num+6] && array[num] != ''){
        if(array[num] == 'X'){
            return 'X won';
            winnerFound = true;
        } else{
            return 'O won';
            winnerFound = true;
        }
    }
}

function checkWinnerinDiag1(array){
    if (array[0] == array[4] && array[4] == array[8] && array[4] != ''){
        if(array[num] == 'X'){
            return 'X won';
            winnerFound = true;
        } else{
            return 'O won';
            winnerFound = true;
        }
    }
}

function checkWinnerinDiag2(array){
    if (array[2] == array[4] && array[4] == array[6] && array[4] != ''){
        if(array[num] == 'X'){
            return 'X won';
            winnerFound = true;
        } else{
            return 'O won';
            winnerFound = true;
        }
    }
}

function checkWinner(array){
    
    while (winnerFound == false) { 
        checkWinnerinCol(0, array);
        checkWinnerinCol(1, array);
        checkWinnerinCol(2, array);

        checkWinnerinRow(0, array);
        checkWinnerinRow(3, array);
        checkWinnerinRow(6, array);

        checkWinnerinDiag1(array);
        checkWinnerinDiag2(array);

        if (gameCounter == 9){
            return "It's a tie!!";
        }
    }
}