require('dotenv').config();
//console.log(process.env.SECRET)
const express = require("express");
const connect = require("./connection.js");
connect()
const app = express();
const methodoverride = require("method-override")
const path = require("path")
const expresslayouts = require("express-ejs-layouts")
const passport = require("passport")
const MongoStore = require("connect-mongo").default
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash")
const session = require("express-session")
const listing_route = require("./routes/listings.js")
const review_route = require("./routes/reviews.js")
const user_route = require("./routes/users.js")
const User = require('./Models/users.js')
const {generalMiddleware} = require('./middlewares.js');

const store = MongoStore.create({
    mongoUrl:process.env.ATLAS_DB_URL,
    collectionName:"sessions"
})
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    store,
    cookie:{
        httpOnly:true,
       // maxAge:2*24*60*60*1000,
        secure:false
    }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(generalMiddleware);
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set("view engine","ejs");
app.use(expresslayouts);
app.set("layout","layout/main");
app.set("views",path.join(__dirname,"Views"));
app.use(express.static(path.join(__dirname,"Public")))
app.use(methodoverride("_method"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.redirect("/listings");
})
app.use('/listings',listing_route);
app.use('/listings/:id',review_route);
app.use('/',user_route);
app.listen(8080,()=>{
    console.log("app is listening on port",8080);
});
app.use((err,req,res,next)=>{
    let error = {status_code:err.status||500 ,message:err.message||"Something went wrong"}
    //console.log(err)
    res.status(error.status_code).render("error",{error});
})