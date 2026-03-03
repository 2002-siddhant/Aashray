const express = require("express");
const router = express.Router({mergeParams:true});
const review_controller = require('../controllers/review.js')
const Listing = require("../Models/Listing.js")
const {isloggedIn, val_review_schema,reviewowner} = require("../middlewares.js")
router.post('/reviews',isloggedIn,val_review_schema,review_controller.post_review)
router.delete('/reviews/:review_id',reviewowner,review_controller.delete_review)

module.exports = router;