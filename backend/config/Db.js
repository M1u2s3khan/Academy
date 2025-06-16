const mongoose = require("mongoose");

exports.dbConnect = () => {
    mongoose
    .connect("mongodb://localhost:27017/", {dbName : "webtech"
    })
    .then((data) => console.log(`Db connect ${data.connection.host}`))
};