const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const user = require('./routes/user.js');


const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', user.create);
app.get('/user', user.index);
app.get('/user/create', user.create);
app.get('/user/details/:id', user.details);
app.post('/user/create', user.createUser);
app.get('/user/edit/:id', user.edit);
app.post('/user/edit/:id', user.editUser);
app.delete('/user/edit/:id', user.delete);

app.listen(3000, function(){
    console.log('Server started on Port 3000...')
});