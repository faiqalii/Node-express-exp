const express = require('express');
const http = require('http');
const morgan = require('morgan');
//const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const dishIDRouter = require('./routes/dishIDRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

//app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/dishes/:dishID' , dishIDRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const Server = http.createServer(app);

Server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});