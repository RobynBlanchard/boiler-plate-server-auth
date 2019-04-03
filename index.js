const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB setup
mongoose.connect('mongodb://localhost:27017/auth');

// App Setup
// morgan and body parser - middleware in express - any request will be passed into these
app.use(morgan('combined')); // logging framework
app.use(bodyParser.json({ type: '*/*' })) // parses incoming requests into json
router(app)

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on:', port);