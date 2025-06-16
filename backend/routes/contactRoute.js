const express = require("express");
const {
    createcontact,
    // getnewcontact,
    // updatedata,
    // deletecategory,
} = require("../controllers/contactcontroller");

const router = express.Router();

router.post("/contact/create", createcontact);
// router.get("/contact/list", getnewcontact);
// router.put("/contact/update/:id", updatedata);
// router.put("/category/delete/:id", deletecategory);

module.exports = router;