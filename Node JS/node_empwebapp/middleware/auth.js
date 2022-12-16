const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const alert=require("alert");
require("dotenv").config();

module.exports={
    authtoken: (req, res, next) => {
        if(req.cookies.key==undefined){
            alert("Please Login!");
            res.redirect("/");
            return;
        }
        else{
            let token=req.cookies.key;
            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if(err){
                    throw err;
                }
                else{
                    // console.log("token verified!");
                    next();
                }
            });
        }
    }
};
