const {readFileSync, writeFileSync, writeFile} = require('fs')
const { readFile } = require('fs')
const path = require('path')
const readline = require('linebyline')

readFile('./work/content/notes.txt', 'utf8', (err)=>{
    if(err){console.log('error'); console.error(err); return}
    console.log("File read successfully")
})

console.log(readFileSync('./work/content/notes.txt', 'utf8'))

writeFileSync('./work/content/sync.txt', 'Written with fs.writeFileSync (synchronous).')
writeFile('./work/content/async.txt', 'Written with fs.writeFile (asynchronous).', (err)=>{
    if(err){console.error(err);return}
    console.log('donezo')
})

writeFile('./work/content/notes.txt', 'appended', {flag:'a'}, (err)=>{
    if(err){console.error(err);return}
    console.log('red')
})

writeFile('./work/content/notes.txt', 'Nope', {flag:'w'}, (err)=>{
    if(err){console.error(err);return}
    console.log('blue')
})

writeFile('./work/content/notes.txt', 'appended', {flag:'wx'}, (err)=>{
    if(err){console.error(err);return}
    console.log('green')
})

let f = readFile('./work/content/notes.txt', {flag:'r'}, (err)=>{
    if(err){console.log('noooo');return}
    console.log('it works')
})
console.log(f)
// Synchronous makes it run in order and won't move on until its complete a doesnt need it to complete it can move on to the next no matter what


// function write(input){
//     readline.question('write in your journal')
//     writeFileSync('./work/content/journal.txt', input, {flag:'a'})
// }
// write()