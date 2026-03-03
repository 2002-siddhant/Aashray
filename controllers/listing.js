const Listing= require('../Models/Listing.js');

const expresserror = require('../expresserror.js');

module.exports.homelisting = async (req,res)=>{
    const listing = await Listing.find({});
    res.render("listing_show",{listing})

}
module.exports.get_newlisting = async (req,res)=>{
    res.render("form",{listing:null})
    console.log("request was sent")
}
module.exports.show_listing_id =async (req,res)=>{
    //console.log(req.user)
    const listing = await Listing.findOne({_id : req.params.id}).populate('reviews')
    //console.log(listing)
    res.render("show",{listing})
}

module.exports.delete_listing  = async (req,res,next) =>{
    try{
        const del = await Listing.findOneAndDelete({_id:req.params.id});
        res.redirect('/listings')
    }
    catch(error){
        next(error)
    }
}
module.exports.get_edit_listing =   async (req,res)=>{
    const listing = await Listing.findOne({_id:req.params.id});
   
    res.render("form",{ listing })
}
module.exports.update_listing  = async (req,res)=>{
   // const new_listing = req.body.listing
   
    const result = await Listing.findOne({_id:req.params.id});
    result.set(req.body.listing)
    if(req.file){
        result.image.url = req.file.path
        result.image.filename = req.file.filename
       
    }
    await result.save();
  
    res.redirect(`/listings`)
}
module.exports.post_new_listing = async (req,res,next)=>{
    try{
        let listing = req.body.listing;
        listing.owner = req.user._id;
        const url = req.file.path
        const filename = req.file.filename
        listing.image = {url,filename};
        console.log(url,"   ",filename)
        const result = await Listing.create(listing);
        res.send(req.file)
    }
    catch(error){
        next(error);
    }
}