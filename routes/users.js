const express = require("express");
const router = express.Router();
const User = require('../Models/users.js')
const expresserror = require("../expresserror.js")
const user_controller = require("../controllers/user.js");
const passport = require("passport")

const {saveUrl}  = require("../middlewares.js")
router.route('/login').get((req,res)=>{
    res.render('login')
})
.post(saveUrl,passport.authenticate("local",{
    failureRedirect:'/login',
    failureFlash:true
}),user_controller.user_login)


router.route('/signup').get((req,res)=>{
    res.render('signup');
})
.post(user_controller.user_signup)
router.get('/logout',user_controller.user_logout)

module.exports = router;
