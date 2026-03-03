const {listing_validation ,review_validation} = require("./schemavalidate.js");
const expresserror = require("./expresserror.js")
const Listing = require("./Models/Listing.js");
const Review = require("./Models/review.js");
module.exports.val_listing_schema = (req,res,next)=>{
    
        const {error} = listing_validation.validate(req.body.listing);
        if(error){
            console.log(error);
            const message = error.details.map((el)=>el.message).join(", ");
            
            return next(new expresserror(message,400));
        }
        next();
}

module.exports.val_review_schema = (req,res,next)=>{
    const {error} = review_validation.validate(req.body.review);
    if(error){
        console.log(error);
        const message = error.details.map((val)=>val.message).join(", ");
        return next(new expresserror(message,400));
    }
    next();
}
module.exports.isloggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        //console.log(req.originalUrl);
        req.session.returnTo = req.originalUrl
       // console.log(req.session.returnTo)
       // console.log(res.locals.returnTo)
        return res.status(400).redirect('/login');
    }
    next();
}
module.exports.saveUrl = (req,res,next)=>{
    if(req.session.returnTo){
        res.locals.redirect_url = req.session.returnTo
    }
    next();
}
module.exports.generalMiddleware = (req,res,next)=>{
    res.locals.user =req.user;
   // res.locals.redirect_url = req.originalUrl
    next();
}

module.exports.listingowner= async (req,res,next)=>{
    let listing  = await Listing.findById(req.params.id);
    //console.log(listing.owner);
    //console.log(req.user._id);
    if(!listing.owner.equals(req.user._id)){
        return next(new expresserror("You are not the owner of this listing",400));
    }
    next();
}
module.exports.reviewowner = async (req,res,next)=>{
    let review = await Review.findById(req.params.review_id);
    console.log(review)
    if(review.owner.equals(req.user._id)) return next();
    next(new expresserror("You are not the owner of this review",400));
}