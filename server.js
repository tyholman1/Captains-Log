require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 
const methodOverride = require('method-override');

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const jsxViewEngine = require('jsx-view-engine');

db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('open', () => console.log('mongo connected!'));
db.on('close', () => console.log('mongo disconnected'));


app.set('view engine', 'jsx')
app.set('views', './views')
app.engine('jsx',jsxViewEngine())

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//INDEX
//NEW
app.get('/new', (req, res) => {
    res.render("New")
  });
  

  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
  
//DELETE
//UPDATE
//CREATE
//EDIT
//SHOW