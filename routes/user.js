const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let util = require('util');
let db = require('../db.js');
const fs = require('fs');
const userFile = './userFile.txt';

app.use(express.json());
app.use(express.urlencoded({extended: false}));

exports.index = function(req, res){
    res.render('user/index', {title: 'User List', users: db.listUsers()});
};

exports.create = function (req, res){
    res.render('user/create');
};

exports.createUser = function(req, res){
    db.addUser({name:req.body.name, email:req.body.email, age:req.body.age});
    res.redirect('/user');

    fs.appendFile(userFile, 'name: ' + req.body.name + ' ' + 'email: ' + req.body.email + ' ' + 'age: ' + req.body.age + "\n", (err) =>{
        if (err){
            return console.log(err);
        }
    })
};


exports.details = function (req, res) {
    var user = db.getUserById(req.params.id);
    res.render('user/details', {user: user});
};

exports.edit = function (req, res) {
    var user = db.getUserById(req.params.id);
    res.render('user/edit', {user: user});
};

exports.editUser = function (req, res) {
    db.updateUser({id:req.params.id, name:req.body.name, email:req.body.email, age:req.body.age});
    res.redirect('/user');
};

exports.delete = function (req, res) {
    db.deleteUser(req.params.id);
    res.redirect('/user');
};