const LocalStrategy = require('passport-local')

module.exports = new LocalStrategy({
        usernameField: 'email'
    }, (email, password, done) => {
    console.log(email, password);
    const dbConnection = require('../index').dbConnection
    // TODO: Lookup password in database and check that.
    
    console.log('getting user')
    
    dbConnection.get_user([ email ])
    .then(users => {
        if (users.length === 1 && users[0].password === password) {
            done(null, users[0])
        } else {
            done(null, false)
        }
    })
    .catch(err => {
        console.log(`Could not authenticate user ${email} because ${err}.`)
        done(err);
    })
})
