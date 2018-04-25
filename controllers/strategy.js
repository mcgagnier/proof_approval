const passport = require('passport')
const LocalStrategy = require('passport-local')

passport.use(new LocalStrategy((username, password, done) => {
    console.log(username, password);
    if(username === "test" && password === "pass") {
        done(null, {username: "test"})
    } else {
        done(null, false)
    }
}))
