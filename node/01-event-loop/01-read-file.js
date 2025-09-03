const {readFile, writeFile} = require('fs')

console.log('startted the first task')

readFile('./node/content/first.txt', 'utf8', (err,result)=>{
    if(err){console.log(err);return}
    console.log(result)
    console.log('completede the first task')
})
console.log('starting next task')
//Things to keep in mind
//You have ended operating system process
//To avoid infinite loops use clearTimeout()