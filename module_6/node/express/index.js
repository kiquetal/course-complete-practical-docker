const express = require('express');
const process = require('process');
const app = express();

process.on('SIGINT', () => {

    console.log('Bye bye interrupted');
    process.exit(0);
} );
process.on('SIGTERM', () => {

    console.log('Bye bye terminated');
    process.exit(0);
} );




app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})
