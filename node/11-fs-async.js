const {readFile, writeFile} = require('fs')

//Asynchronous read and write example
readFile('./node/content/big.txt', 'utf8', (err, firstData)=>{
    if(err){console.log(err);return}
    readFile('./node/content/second.txt', 'utf8', (err,secondData)=>{
        if(err){console.log(err);return}
        const result = `${secondData} and ${firstData}`
        writeFile('./node/content/result-mind-grenade.txt', result, (err)=>{
            if(err){console.log(err);return}
            console.log('completed')
        })
        writeFile('./node/content/result-mind-grenade.txt', result, (err)=>{
        if(err){console.log(err);return}
        console.log('completed')
    })
    })
    
})