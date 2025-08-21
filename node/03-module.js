//CommonJs, Every file is a module (by default)
//Modules - encapuslated code (only share the minimu)

const name = require('./04-name')
const message = require('./05-utils')
const data = require('./06-alternative')
require('./07-mind-grenade')

console.log(name.Shakira)
console.log(name.pitbull)

message('Bernard')

console.log(data.items[0])
console.log(data.marriedPerson)