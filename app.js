// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 28 - Middleware & Static Files
//-----------
// WHAT THIS APP DOES------

/* https://youtu.be/xxxxxxxxx

xxxxxxxxxxxxxxxxxxxxxx

xxxxxxxxxxxxxxxxxxxxx */

// require the installed express pkg
const express = require('express');

// create an express app called app
const app = express();

// express app's set() mthd will
// set EJS as the template-view engine
app.set('view engine', 'ejs');

//express's app.use( ) mthd will access express's builtin middleware
app.use('/assets', express.static('stuff'));

// express HTTP routing mthd that responds to a client req
// express app's HTTP GET req mthd 
// for the home pg route
// route that resp to a static client req for home pg
app.get('/', function (req, res) {
    res.render('index.ejs');
});

// express HTTP routing mthd that responds to a client req
// express app's HTTP GET req mthd 
// for the contact pg route
// route that resp to a static client req for contact pg
app.get('/contact', function (req, res) {
    res.render('contact.ejs');
});

// express HTTP routing mthd that responds to a client req
// express app's HTTP GET req mthd
// for the profile pg route w a person's dynamic name route
// route that resp to a dynamic client req for a specific profile name
app.get('/profile/:name', function (req, res) {
    // create some data for demo purposes
    var data = { age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing', 'yoyoing', 'biking', 'dancing', 'sleeping', 'kite-flying'] };
    res.render('profile.ejs', { person: req.params.name, moreData: data });
});

// express app's listen() mthd will
// listen for port 3000
app.listen(3000);

// con.log a test mssg
global.console.log('\n"Hey, be quiet!! The server is trying to listening for Port 3000!"\n');