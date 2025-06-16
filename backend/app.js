const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
    origin: "*",
}

app.use(express.json());
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));



// contact
const contactRoute = require("./routes/contactRoute");
app.use("/api/v1", contactRoute);


// onlineRagistration page 
const onlineRagistrationRoute = require("./routes/onlineRagistrationRoute");
app.use("/api/v1", onlineRagistrationRoute);


// // Alldatalist 
// const alldataRoute = require("./routes/alldataRoute");
// app.use("/api/v1", alldataRoute);



const errMiddleWare = require('./middleware/error')
app.use(errMiddleWare)

module.exports = app;