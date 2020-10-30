const express = require('express');
const createError = require('http-errors');
require('express-async-errors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');
const util = require('util');

const source = fs.readFileSync('./lib/test.wasm');
// const {
//     _sum,
//     _checkPrimes
// } = require('./lib/test');

const app = express();

app.use(morgan('dev'));
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);
app.use(bodyParser.json());

// JS Prime number checker
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return 0;
    }
    if (num != 1 && num != 0) {
        return 1;
    } else {
        return 0;
    }
}

// Check numbers 0 - {primes}
function checkPrimes(num) {
    let count = 0
    for (let i = 0; i < num; i++) {
        if (isPrime(i)) count++
    }
    return count
}

app.get('/test-js', (req, res) => {
    const n = req.query.n;
    const result = checkPrimes(n);
    return res.send({
        result
    })
})

app.get('/test-c', (req, res) => {
    const n = req.query.n;
    var typedArray = new Uint8Array(source);
    const env = {
        memoryBase: 0,
        tableBase: 0,
        memory: new WebAssembly.Memory({
            initial: 256
        }),
        table: new WebAssembly.Table({
            initial: 0,
            element: 'anyfunc'
        })
    }
    WebAssembly.instantiate(typedArray, {
        env: env
    }).then(data => {
        // console.log(data.instance.exports);
        let result = data.instance.exports.checkPrimes(n);
        return res.send({
            result
        })
    }).catch(e => {
        // error caught
        console.log(e);
    });
})

// Start server
app.listen(3000, () => console.log('Server running on port 3000!'))


// CMD: emcc lib\test.c -O2 -s WASM=1 -s SIDE_MODULE=1 -o lib\test.wasm