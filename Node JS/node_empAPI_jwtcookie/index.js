const express=require("express");
const cors=require("cors");
const app=express();
const bodyParser = require("body-parser")
const cookieParser=require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// app.set("view engine", "ejs");

const routes=require("./routes/router");
app.use("/", routes);

app.listen(3000, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running on port: 3000");
    }
});