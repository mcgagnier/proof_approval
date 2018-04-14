const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const axios = require('axios')
const auth0 = require('auth0')
const massive = require('massive')
const passport = require('passport')
const LoginController = require('./controllers/LoginController')
const user_controller = require('./controllers/user_controller')
require('dotenv').config()

app.use(bodyParser.json());
app.use(cors());

function verifyPassword (password) {
    if (user.password === password ) return true
    else return false
}

massive( process.env.CONNECTION_STRING ).then ( dbInstance => app.set('db', dbInstance) );

// passport.use(new LocalStrategy(
//     // this username and password comes from what they entered
//     function(username, password, done) {
//       db.findUserByEmail(email).then(user => {
//         if (!user) { return done(null, false); }
//         //check their password against one in db
//         if (!verifyPassword(user, password)) { return done(null, false); }
//         return done(null, user);
//       })
//       .catch(error => done(error))
//     }
//   ));

// app.post('/login', 
//     passport.authenticate('local', { failureRedirect: '/login' }),
//     function(req, res) {
//     res.redirect('/');
// });

app.post('/login', LoginController.post);
app.post('/api/printing_users', user_controller.create);

const port = 8686;
app.listen(port, () => {
    console.log('Tuned in to channel ' + port);
})