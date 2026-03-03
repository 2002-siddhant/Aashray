const express = require("express");
const router = express.Router();
const Listing = require('../Models/Listing.js')
const expresserror = require("../expresserror.js")
const listing_controller = require("../controllers/listing.js")
const multer = require("multer")
const {storage} = require('../cloudinary_config.js')
const upload = multer({storage})
const {isloggedIn,val_listing_schema,listingowner} = require("../middlewares.js")
router.get('/',listing_controller.homelisting)
router.get('/new',isloggedIn,listing_controller.get_newlisting)
router.route('/:id')
.get(isloggedIn,listing_controller.show_listing_id)
.delete(isloggedIn,listingowner,listing_controller.delete_listing)
.put(isloggedIn,listingowner,upload.single('listing[image]'),listing_controller.update_listing)


router.get('/edit/:id',listing_controller.get_edit_listing)
router.post('/',upload.single('listing[image]'),isloggedIn,val_listing_schema,listing_controller.post_new_listing)
module.exports = router;