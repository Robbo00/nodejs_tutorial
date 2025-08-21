const {writeFileSync, write} = require('fs')

//Every bit of data is writ=ten to the end of the file 
for(let i = 0; i< 200000; i++)[
    writeFileSync('./node/content/big.txt', `hello idiot ${i}\n`, {flag:'a'})
]

//Every bit of data overwrites the last bit of the data