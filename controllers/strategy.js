const LocalStrategy = require('passport-local')
const dbConnection = require('../index').dbConnection

module.exports = new LocalStrategy((username, password, done) => {
    console.log(username, password);
    // TODO: Lookup password in database and check that.
    
    console.log('getting user')
    
    dbConnection.get_job([ params.job ])
    .then( jobs => res.send(jobs) )
    if(username === "test" && password === "pass") {
        const user = {
            username: "test"
        }
        done(null, user)
    } else {
        done(null, false)
    }
})
