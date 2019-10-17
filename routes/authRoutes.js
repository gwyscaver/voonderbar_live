var express = require("express");
var path = require("path");
var db = require('../models');


module.exports = function(app) {
    // Find all Authors and return them to the user with res.json
    // app.get("/api/strains", function(req, res) {


    

//sign up page
app.get('/signup',function(req,res){

    res.render('signup');
    
})
//post request for signup page
app.post('/signup',function(req,res){
    console.log(req.body)
    db.User.create({
        name:req.body.name,
        password:req.body.password
    }).then(function(newUser){
        console.log(newUser)
        res.redirect('/main');
    })
})
//login page
app.get('/login',function(req,res){
    res.render('login')
})

app.post('/login',function(req,res){
    db.User.findOne({
        where:{
            name:req.body.name
        }}).then(function(dbUser){
        if(req.body.password===dbUser.password) {
            req.session.user = dbUser
        }
        else {
            req.session.user= false;
            req.session.error = 'auth failed bro'
            res.redirect('/');
        }
        res.redirect('/main');
    })
})

app.get('/logout',function(req,res){
    req.session.destroy(function(){
        res.send('successfully logged out')
    })
})

app.get('/readsessions',function(req,res){
    res.json(req.session);
})

    }