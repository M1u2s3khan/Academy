const mongoose = require("mongoose");

const onlineragistrationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        // required:true
        },
        course:{
            type:String,
            // required:true
            },
            center:{
                type:String,
             },
             address:{
                type:String,
             },
             city:{
                type:String,
             },
             country:{
                type:String,
             },
             zipcode:{
                type:Number,
             },
             amount:{
                type:Number,
             },
             
   createdAt:{
    type: Date,
    required: true,
   }

});

module.exports = mongoose.model("onlineragistration", onlineragistrationSchema);



