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
const job_controller = require('./controllers/job_controller')
const express_session = require('express-session');
require('dotenv').config()

app.use(bodyParser.json());
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express_session({
    secret: 'ginger',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
function verifyPassword (password) {
    if (user.password === password ) return true
    else return false
}
passport.use(require('./controllers/strategy'))

let dbConnection = null;
passport.serializeUser((user, done) => {
    // console.log('serialize', user)
    done(null, user.email)
}) 
passport.deserializeUser((email, done) => {
    // console.log('deserialize', email)
    dbConnection.get_user([ email ])
    .then( users => {
        done(null, users[0]);
    })
    .catch( (err) =>{
        console.log(err);
    })
}) 
 
massive( process.env.CONNECTION_STRING ).then ( dbInstance => {
    app.set('db', dbInstance)
    dbConnection = dbInstance
    module.exports.dbConnection = dbInstance;
    console.log("ready");
});

app.post("/login", passport.authenticate("local", {session: true}), (req, res) => {
    res.send(req.user);
})
app.post("/logout", (req, res) => {
    console.log('req.logout', req.logout)
    req.logout();
    delete req.session;
    res.send("ok");
})
app.get("/user_info", (req, res) => res.send(req.user));
app.post('/api/printing_users', user_controller.create);
app.delete('/api/printing_users/:id', user_controller.delete);
app.post('/api/printing_job', job_controller.create);
app.delete('/api/printing_job/:job', job_controller.delete);
app.get('/api/printing_job', job_controller.get_all);
app.get('/api/printing_job/:job', job_controller.get_one);
app.put('/api/update_status/:job', job_controller.update_status);
app.put('/api/update_changes/:job', job_controller.update_changes);

app.get('/api/printing_job_customer/:user_id', job_controller.get_customer_list)

const port = 8686;
app.listen(port, () => {
    console.log('Tuned in to channel ' + port);
})




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