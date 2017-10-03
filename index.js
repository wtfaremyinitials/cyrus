const { join } = require('path')
const { arch } = require('os')
const { access } = require('mz/fs')
const exec = require('mz/child_process').execFile
const wait = require('blocking-await')

const BINARY = join(
    __dirname,
    process.env.CYRUS_BIN_PATH || 'native/build/cyrus-' + arch()
)

function parse(code, options) {
    return JSON.parse(wait(exec(BINARY))[0])
}

function parseExpression(code, options) {
    throw new Error('unimplemented')
}

module.exports = { parse, parseExpression }
