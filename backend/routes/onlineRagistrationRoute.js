const express = require("express");
const {
    createonlineragistration,
//     // getnewcontact,
//     // updatedata,
//     // deletecategory,
} = require("../controllers/onlineragistrationcontroller");

const router = express.Router();

router.post("/onlineragistration/create", createonlineragistration);
// // router.get("/contact/list", getnewcontact);
// // router.put("/contact/update/:id", updatedata);
// // router.put("/category/delete/:id", deletecategory);

module.exports = router;