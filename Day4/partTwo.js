const fs = require('fs');

function readFile() {
    fs.readFile('./Day4/data.txt', function (err, data) {
        let arr = data.toString().split('\r\n')
        let count = 0;

        //for(let i = 0; i < arr.length; i++) {


            for(let j = 0; j < arr.length; j++) {
                let halfs = arr[j].split(',')
                let firstHalf = halfs[0]
                let secondHalf = halfs[1]

                let subHalfs1 = firstHalf.split('-')
                let subHalfs2 = secondHalf.split('-')

  
                //if x1 is > than y2 or y1 < x2 , there is no overlap, otherwise there is 

                if(((parseInt(subHalfs1[0]) > parseInt(subHalfs2[1])) || (parseInt(subHalfs1[1]) < parseInt(subHalfs2[0])))) {
                    continue
                } else {
                    count++
                }
            }
            //break;
        //}
            console.log(count)
     });
}

readFile()