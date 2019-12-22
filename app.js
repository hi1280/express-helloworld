const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
