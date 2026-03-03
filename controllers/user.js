const expresserror = require('../expresserror.js');
const User  = require('../Models/users.js');

module.exports.user_login =(req,res)=>{
   // console.log(res.locals.redirect_url)
    const url = res.locals.redirect_url || "/listings";
    
    res.redirect(url)
}
module.exports.user_signup = async (req,res) =>{
    const { username,password,email } = req.body;
    let user = new User({
        email:email,
        username:username
    })
    let result = await User.register(user,password);
    res.redirect('/login')
}
module.exports.user_logout = (req,res,next)=>{
    req.logout((error)=>{
        if(error){
            next(error);
        }
        res.redirect('/listings')
    });
}