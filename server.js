// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
require('dotenv').config();



var session = require("express-session");

var exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

//--Joe add ins for Auth----

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');


//--Joe add ins for Auth--
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
// Routes
// =============================================================
require("./routes/homeRoute")(app);
// require("./routes/htmlRoute")(app);
require("./routes/authRoutes")(app);

var cartRoutes = require("./routes/cartRoute");
app.use("/cart", cartRoutes);

var seeds = require('./db/seeds.js');

app.get("/seeddb",function(req,res){
  db.Cannabis.findAll().then(function(things){
    if(!things.length){
      seeds();
      res.json('seeding complete!');
    }
    res.json('already seeded!')
  })
})

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
