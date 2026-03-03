const Listing= require('../Models/Listing.js');
const Review = require('../Models/review.js');
const expresserror = require('../expresserror.js')

module.exports.post_review = async (req,res,next)=>{
    try{
        let review = req.body.review;
        review.owner = req.user._id;
        const created_review = new Review(review)
       // console.log(req.params.id);
       
        const listing = await Listing.findOne({_id:req.params.id})
       // console.log(listing)
        listing.reviews.push(created_review._id);

        let result = await created_review.save()
       // console.log(result)
        await listing.save()
        res.redirect(`/listings/${listing._id}`)
    }
    catch(error){
        console.log(error)
        next(new expresserror(error.message,500))
    }

}
module.exports.delete_review = async (req,res,next)=>{
    try{
        await Listing.updateOne({_id:req.params.id},{$pull:{reviews:req.params.review_id}});
        await Review.deleteOne({_id:req.params.review_id});
        //console.log("action performed successfully")
        res.redirect(`/listings/${req.params.id}`)
    }
    catch(error){
        next(new expresserror(error.message,500))
    }
}