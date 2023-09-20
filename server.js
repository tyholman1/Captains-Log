require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Log = require('./models/log')
const logRoutes = require('./controllers/logs')
const PORT = process.env.PORT || 3000; 
const methodOverride = require('method-override');


const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const jsxViewEngine = require("jsx-view-engine");

db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('open', () => console.log('mongo connected!'));
db.on('close', () => console.log('mongo disconnected'));


app.set('view engine', 'jsx')
app.set('views', './views')
app.engine('jsx',jsxViewEngine())

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use("/", logRoutes)

// //INDEX
// app.get('/logs', async (req, res) => {
//     try {
//       const foundLog = await Log.find({});
//       res.status(200).render('Index', {
//         log: foundLog,
//       });
//     } catch (err) {
//       res.status(400).send(err);
//     }
//   });
// //NEW
// app.get('/logs/new', (req, res) => {
//     res.render("New")
//   });
  
// //DELETE
// app.delete('/logs/:id', async (req, res) => {
//   // this is is going to actually implement the delete functionality from the database
//   try {
//     // we are getting this id from the req params (:id)
//     await Log.findByIdAndDelete(req.params.id); 
//     res.status(200).redirect('/logs');
//   } catch (err) {
//     res.status(400).send(err);
//   }
// })
// //UPDATE
// app.put('/logs/:id', async (req, res) => {
//   console.log("Its working")
//   try {
//     if (req.body.shipIsBroken === 'on') {
//       req.body.shipIsBroken = true;
//     }
//     else {
//       req.body.shipIsBroken = false;
//     }
//     const updatedLog = await Log.findByIdAndUpdate(
//       // id is from the url that we got by clicking on the edit <a/> tag
//       req.params.id, 
//       // the information from the form, with the update that we made above
//       req.body, 
//       // need this to prevent a delay in the update
//       {new: true})
//       res.redirect(`/logs/${req.params.id}`);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// //CREATE
// app.post('/logs', async (req, res) => {
//     try {
//       req.body.shipIsBroken = req.body.shipIsBroken === "on"
//       const createLog = await Log.create(req.body);

//       res.status(201).redirect("/logs")
//     } catch (err) {
//       console.log(err)
//       res.status(400).send(err);
//     }
//   });
  
// //EDIT
// app.get('/logs/:id/edit', async( req, res ) => {
//   try {
//     // find the document in the database that we want to update 
//     const foundLog= await Log.findById(req.params.id);
//     res.render('Edit', {
//       log: foundLog //pass in the foundFruit so that we can prefill the form
//     })
//   } catch (err) {
//     res.status(400).send(err);
//   }
// })

// //SHOW
// app.get('/logs/:id', async (req, res) => {
//     try {
//       const foundLogs = await Log.findById(req.params.id);
  
//       //second param of the render method must be an object
//       res.render('Show', {
//         //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//         log: foundLogs,
//       });
//     } catch (err) {
//       res.status(400).send(err);
//     }
//   });


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });