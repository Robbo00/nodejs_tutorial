const {readFileSync, writeFileSync} = require('fs')
const { readFile } = require('fs')
const path = require('path')

console.log('Winter Is Here')
// Synchronous(fstat.readfilesync and fs.writeFileSync..etc)
// is considering a blocking event.AT_TARGETNO other code runs during that TimeRanges
//Performance: slow when handling many requests because each operation halts all code execution
//Uses: Best of one of programs like utilities or backups, or large database changes

const first = readFileSync(path.join(__dirname, '/content/first.txt'), 'utf8')
const second = readFileSync(path.join(__dirname, '/content/second.txt'), 'utf8')
const third = readFileSync(path.join(__dirname, '/content/third.txt'), 'utf8')
console.log(first)

// Charset options 
//base 64
//base64url
//hex
//usc2
//utf8
//binary

writeFileSync(path.join(__dirname, '/content/Regular-SHow.txt'), `Here is the Results: ${first}, ${second}, ${third}`, {flag:'a'})

//a: Opens the file for appending. If the files does not exist it is created. If the file exists the new data is appended to the end of the existing content
//ax: Similiar to a but it fail if the pathe exists
//w+: opens the file for reading and writing. If the file does not exist it is created. If the file exists its contents are overwritten
//a+: Opens a file for reading and appending: fi the file does not exist