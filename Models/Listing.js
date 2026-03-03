const mongoose = require("mongoose");
const Review = require("./review");
const User = require("./users.js")
const list_schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        url:String,
        filename:String
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        trim:true,
        required:true
    },
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    }],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});
list_schema.pre("findOneAndDelete",async function(){
    try{
        const listing = await this.model.findOne(this.getFilter()).populate("reviews")
        console.log(listing)
        if(listing){
            const result = await Review.deleteMany({_id:{$in:listing.reviews}})
            console.log(result)
        }
    }
    catch(error){
        throw error;
    }
})
const Listing = mongoose.model("Listing",list_schema);
module.exports = Listing;