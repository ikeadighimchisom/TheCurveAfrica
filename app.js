const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path: "./Config/config.env"});
const cors = require("cors");
const fileUpload = require("express-fileupload")

const newRegister = require("./Routers/regRouter");
const Reaching = require("./Routers/ReachOut")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./uploads"))

app.use(fileUpload({ 
    useTempFiles: true
}))


app.use("/api",newRegister);
app.use("/api",Reaching)

app.get("/", (req,res)=>{
    res.send("Welcome Message")
});   

app.use("/uploaded-image", express.static(process.cwd() + "/uploads"));

module.exports = app