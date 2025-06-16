const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.Massage = err.Massage || "Internal server error";

    if(err.name === "CastError"){
const message = `Resource not found . invalid ${err.path}`
err = new ErrorHandler(message,404)
    }
    console.log(err)
res.status(err.statusCode).json({
    success: false ,
    error: err.stack,
    message: err.message
})
}



