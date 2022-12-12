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

        

        let total = 0;

        let rockTieRock = 'A X'
        let rockLosesPaper = 'B X'
        let rockBeatScissor = 'C X'
        
        let paperTiePaper = 'B Y'
        let paperBeatRock = 'A Y'
        let paperLosesScissor = 'C Y'
        
        let scissorTiescissor = 'C Z'
        let scissorsLoseRock = 'A Z'
        let scissorsBeatsPaper = 'B Z'
        
        //Your total score is the sum of your scores for each round. The score for a single round is the score 
        //for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for 
        //the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === rockTieRock) {
                total += (1 + 3)
            } else if(arr[i] === rockLosesPaper) {
                total += (1 + 0)
            } else if(arr[i] === rockBeatScissor) {
                total += (1 + 6)
            } else if(arr[i] === paperTiePaper) {
                total += (2 + 3)
            } else if(arr[i] === paperBeatRock) {
                total += (2 + 6)
            } else if(arr[i] === paperLosesScissor) {
                total += (2 + 0)
            } else if(arr[i] === scissorTiescissor) {
                total += (3 + 3)
            } else if(arr[i] === scissorsLoseRock) {
                total += (3 + 0)
            } else if(arr[i] === scissorsBeatsPaper) {
                total += (3 + 6)
            }
        }

        console.log(total)
     });
}

readFile()