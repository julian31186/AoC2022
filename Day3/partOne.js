const fs = require('fs');

function readFile() {
    fs.readFile('./Day3/data.txt', function (err, data) {
        let arr = data.toString().split('\r\n')

        const counts = new Map();
        counts.set('a',1)
        counts.set('b',2)
        counts.set('c',3)
        counts.set('d',4)
        counts.set('e',5)
        counts.set('f',6)
        counts.set('g',7)
        counts.set('h',8)
        counts.set('i',9)
        counts.set('j',10)
        counts.set('k',11)
        counts.set('l',12)
        counts.set('m',13)
        counts.set('n',14)
        counts.set('o',15)
        counts.set('p',16)
        counts.set('q',17)
        counts.set('r',18)
        counts.set('s',19)
        counts.set('t',20)
        counts.set('u',21)
        counts.set('v',22)
        counts.set('w',23)
        counts.set('x',24)
        counts.set('y',25)
        counts.set('z',26)

        counts.set('A',27)
        counts.set('B',28)
        counts.set('C',29)
        counts.set('D',30)
        counts.set('E',31)
        counts.set('F',32)
        counts.set('G',33)
        counts.set('H',34)
        counts.set('I',35)
        counts.set('J',36)
        counts.set('K',37)
        counts.set('L',38)
        counts.set('M',39)
        counts.set('N',40)
        counts.set('O',41)
        counts.set('P',42)
        counts.set('Q',43)
        counts.set('R',44)
        counts.set('S',45)
        counts.set('T',46)
        counts.set('U',47)
        counts.set('V',48)
        counts.set('W',49)
        counts.set('X',50)
        counts.set('Y',51)
        counts.set('Z',52)

        let total = 0;
        
        for(let i = 0; i < arr.length; i++) {
            let firstHalf = arr[i].substring(0,(arr[i].length/2))
            let secondHalf = arr[i].substring((arr[i].length/2),(arr[i].length))
            var set = new Set();
            let both = []

            for(let j = 0; j < firstHalf.length; j++) {
                set.add(firstHalf[j])
            }
            
            for(let k = 0; k < secondHalf.length; k++) {
                if(set.has(secondHalf[k])) {
                    if(!both.includes(secondHalf[k])) both.push(secondHalf[k])
                }
            }
            
            for(let l = 0; l < both.length; l++) {
                total += counts.get(both[l])
            }
            
        }

        
        console.log(total)
     });
}

readFile()


