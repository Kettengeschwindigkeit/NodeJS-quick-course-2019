// (function(exports, require, module, __dirname, __filename) {
//     const chalk = require('chalk')
//     const text = require('./data')

//     console.log('Hello NodeJS')
//     console.log(chalk.blue('Hello NodeJS'))
//     console.log(chalk.green(text))
// })

const chalk = require('chalk')
const text = require('./data')

console.log('Hello NodeJS')
console.log(chalk.blue('Hello NodeJS'))
console.log(chalk.green(text))

console.log(__dirname)
console.log(__filename)
