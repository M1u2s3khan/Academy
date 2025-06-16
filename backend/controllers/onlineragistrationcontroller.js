// const onlineragistrationcontroller = require('../model/onlineragistrationcontroller');
const onlinemasterform = require('../model/onlineRagistration')
const mongoose = require("mongoose");
 exports.createcontact = async (req, res) => {
    try{
        const {name,email} = req.body;

        if(!name ){
            throw new Error("required Field Missing")
        }
        
        const data = await onlinemasterform.create({
            ...req.body,
            createdAt: new Date()
        });
        res.status(200).json({
            success: true,
            data,
        });
    }catch (err) {
        console.log(err);
        res.status(400).send(err.massage)
    }
};


// // // get new customer 
// // exports.getnewcontact = async (req, res) => {
// //     try {
// //         const data = await contactRagistration.find({}, "-__v");
// //         res.status(200).json({
// //             success: true,
// //             data,
// //         });
// //     } catch (err) {
// //         console.log(err);
// //         res.status(400).json({ success: false, message: err.message });
// //     }
// // };


// // exports.getnewcontact = async (req, res) => {
// //     try {
// //         const data = await contactform.find({}, "-__v"); 
// //         res.status(200).json({
// //             success: true,
// //             data,
// //         });
// //     } catch (err) {
// //         console.log(err);
// //         res.status(400).json({ success: false, message: err.message });
// //     }
// // };



// // exports.updatedata = async (req, res) => {
// //     try {
// //         const { id } = req.params;
// //         const { contactName, Email } = req.body;

// //         if (!mongoose.Types.ObjectId.isValid(id)) {
// //             return res.status(400).json({ success: false, message: "Invalid ID" });
// //         }

// //         const updateRecord = await contactmasterform.findByIdAndUpdate(
// //             id,
// //             { contactName, Email },
// //             { new: true, runValidators: true }
// //         );

// //         if (!updateRecord) {
// //             return res.status(404).json({ success: false, message: "Record not found" });
// //         }

// //         res.status(200).json({
// //             success: true,
// //             data: updateRecord 
// //         });

// //     } catch (err) {
// //         console.error(err); 
// //         res.status(500).json({ success: false, message: "Server error" });
// //     }
// // }

