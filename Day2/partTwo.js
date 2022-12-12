const fs = require('fs');

function readFile() {
    fs.readFile('./Day2/data.txt', function (err, data) {
        let arr = data.toString().split('\r\n')
        
        //elf
        //rock A
        //paper B
        //scissors C

        //myChoise
        //rock x
        //paper y
        //scissors z

        

        

        let rockTieRock = 'A X'
        let rockLosesPaper = 'B X'
        let rockBeatScissor = 'C X'
        
        let paperTiePaper = 'B Y'
        let paperBeatRock = 'A Y'
        let paperLosesScissor = 'C Y'
        
        let scissorTiescissor = 'C Z'
        let scissorsLoseRock = 'A Z'
        let scissorsBeatsPaper = 'B Z'
        
        

        //X means need to lose
        //Y means draw
        //Z means win
        let mustWinRock = 'A Z'
        let mustDrawRock = 'A Y'
        let mustLoseRock = 'A X'

        let mustWinPaper = 'B Z'
        let mustDrawPaper = 'B Y'
        let mustLosePaper = 'B X'

        let mustWinScissors = 'C Z'
        let mustDrawScissors = 'C Y'
        let mustLoseScissors = 'C X'

        //Your total score is the sum of your scores for each round. The score for a single round is the score 
        //for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for 
        //the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

        let total = 0;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === mustWinRock) {
                total += (2 + 6)
            } else if(arr[i] === mustDrawRock) {
                total += (1 + 3)
            } else if(arr[i] === mustLoseRock) {
                total += (3 + 0)
            } else if(arr[i] === mustWinPaper) {
                total += (3 + 6)
            } else if(arr[i] === mustDrawPaper) {
                total += (2 + 3)
            } else if(arr[i] === mustLosePaper) {
                total += (1 + 0)
            } else if(arr[i] === mustWinScissors) {
                total += (1 + 6)
            } else if(arr[i] === mustDrawScissors) {
                total += (3 + 3)
            } else if(arr[i] === mustLoseScissors) {
                total += (2 + 0)
            }
        }

        console.log(total)
     });
}

readFile()


