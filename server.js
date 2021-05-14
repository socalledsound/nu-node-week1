const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.all('/campsites', (req, res, next) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

app.get('/campsites', (req, res) => {
    res.end('will send all the campsites')
})

app.post('/campsites', (req, res) => {
    res.end(`will add campsite: ${req.body.name} with description ${req.body.description}`)
})

app.put('/campsites', (req, res) => {
    res.statusCode = 403
    res.end('PUT not supported on /campsites')
})

app.delete('/campsites', (req, res) => {
    res.end('deleting all campsites')
})

app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`will send details of ${req.params.campsiteId}`)
})

app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`)
})  

app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`updating campsite ${req.params.campsiteId}\n`)
    res.end(`updating campsite ${req.body.name} with description ${req.body.description}`)
})


app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`deleting campsite ${req.params.campsiteId}`)
})

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    // console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});