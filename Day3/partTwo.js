const { group } = require('console');
const fs = require('fs');
const { getPriority } = require('os');

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
        let groupsOf3 = []
        let both = []
        let count = 3

        for(let i = 0; i < arr.length; i += 3) {
            const chunk = arr.slice(i, i + count);
            groupsOf3.push(chunk)
        }
        


        for(let i = 0; i < groupsOf3.length; i++) {
            var set1 = new Set();
            var set2 = new Set();

            for(let j = 0; j < groupsOf3[i][0].length; j++) {
                set1.add(groupsOf3[i][0][j])
            }
            for(let k = 0; k < groupsOf3[i][1].length; k++) {
                set2.add(groupsOf3[i][1][k])
            }

            for(let l = 0; l < groupsOf3[i][2].length; l++) {
                if(set1.has(groupsOf3[i][2][l]) && set2.has(groupsOf3[i][2][l])) {
                    total += counts.get(groupsOf3[i][2][l]) 
                    break;
                }
            }
            
            
        }
        
        console.log(total)
     });
}

readFile()


