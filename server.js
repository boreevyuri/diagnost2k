const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const server = require('http').Server(app);
const addUser = require('./create-user');
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Define Routes
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-X-Requested-With', '*');
  res.setHeader('Access-Control-Allow-Content-Type', '*');
  res.setHeader('Access-Control-Allow-Accept', 'true');
  next();
});

//app.use(express.static(__dirname + '/html'));
// serve translation/{ru|en|cz}.json
app.use('/translation/', express.static(__dirname + '/translation'));

connectDB();
// addUser('admin', '123456');

app.use(cors());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts/', require('./routes/posts'));
app.use('/api/email', require('./routes/email'));
app.use('/api/cars', require('./routes/cars'));
app.use('/api/models', require('./routes/models'));
app.use('/api/engines', require('./routes/engines'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/content', require('./routes/content'));

app.get('/', async (req, res) => {
  res.send('How are you doing?');
});

app.get('/*', async (req, res) => {
  res.send([]);
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
