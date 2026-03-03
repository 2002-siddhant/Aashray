const mongoose = require("mongoose");
const User = require("./users.js")
const reviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    comment:{
        type:String,
        trim:true,
        required:true
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref :"User"
    }
});
const Review = mongoose.model("Review",reviewSchema)
module.exports = Review;