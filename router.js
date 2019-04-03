const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// jwt: authenticate using the jwt strategy
// session: when a user is authenticated don't try to create a session for them
const requireAuth = passport.authenticate('jwt', { session: false })

const requireSignin = passport.authenticate('local', { session: false })

// to export code in a node js environment
module.exports = function(app) {
  // any route coming in must pass this requireAuth step and then it can go on to the request handler
  // route '/' is a protected route
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' });
  })
  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)
}