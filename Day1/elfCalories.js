const fs = require('fs');

function readFile() {
    fs.readFile('./Day1/data.txt', function (err, data) {
        var arr = data.toString().split("\r\n")

        var max1 = 0;
        var max2 = 0;
        var max3 = 0;

        var sum = 0;
        console.log(arr)

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === '') {
                if(sum > max1) {
                    max3 = max2;
                    max2 = max1;
                    max1 = sum;
                } else if(sum > max2) {
                    max3 = max2;
                    max2 = sum;
                } else if(sum > max3) {
                    max3 = sum;
                }
                sum = 0;
            } else {
                sum += parseInt(arr[i]);
            }
            
        }   
        console.log(max1 +  max2  + max3)
     });
}

readFile()


