const app = require("./app");
const { dbConnect } = require("./config/Db");

dbConnect();

app.listen(8000, () => {
    console.log(`server start ${8000}`);
});