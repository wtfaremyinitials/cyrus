const { test } = require('ava')
const { parse } = require('..')

test(t => {
    t.deepEqual(parse(''), {})
})

test(t => {
    t.deepEqual(parse('myVar'), {
        type: 'Identifier',
        start: 0,
        end: 5,
        loc: {
            start: {
                line: 1,
                column: 0,
            },
            end: {
                line: 1,
                column: 5,
            },
            identifierName: 'myVar',
        },
        name: 'myVar',
    })
})
