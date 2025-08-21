const os = require('os')

const user = os.userInfo()
// console.log(useInsertionEffect)

function convertTime(seconds){
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600)/ 60)
    const secs = Math.floor(seconds%60)
    return ` Hours: ${hours}: Mins: ${minutes}: Secs ${secs}`
}
console.log(convertTime(os.uptime()))

//Convert to hourd mins and seconds


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    device: os.platform
    
}

console.log(currentOS)