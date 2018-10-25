var express = require('express')
var router = express.Router()
var http = require('http'),
    qs = require('querystring');
<<<<<<< HEAD
var path    = require("path");
=======
>>>>>>> e19b1541c79f156519b0bbfc76e695106cf8f502

var controlador = require('./controller.js')

router.get("/newcard", function(req, res){
<<<<<<< HEAD
  res.sendFile('public/formulario.html', {root:'.'})
})

=======
  res.sendFile("newCard.html")
} )
>>>>>>> e19b1541c79f156519b0bbfc76e695106cf8f502
router.get("/login", function(req, res){
  res.sendFile("login.html")
} )
router.post("/newcard", function (req, res){
  console.log("new card")
  console.log(req.body)
  var title = req.body.title
  var desc = req.body.desc
  var priority = req.body.priority
  controlador.newCardController(title, desc, priority, function(respuesta){
    console.log("Recibido")
    res.send("Holi")
  })
})
<<<<<<< HEAD
//COSES DE LOGIN DE GOOGLE
  // route for showing the profile page
app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
        user : req.user // get the user out of session and pass to template
    });
});

  // route for logging out
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

    // facebook routes
    // twitter routes

    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
app.get('/auth/google/callback',
        passport.authenticate('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
        }));

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

=======
>>>>>>> e19b1541c79f156519b0bbfc76e695106cf8f502
router.post("/login", function (req, res){
  var user = req.body.title
  var desc = req.body.desc
  var priority = req.body.priority
  controller.newCard(title, description, priority, function(respuesta){
    console.log("Recibido")
    res.send("Holi")
  })
})


module.exports = router
