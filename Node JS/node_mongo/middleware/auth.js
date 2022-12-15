const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");
require("dotenv").config();

module.exports={
    authtoken: (req, res, next) => {
        // console.log(req.cookies.key);
        if(req.cookies.key==undefined){
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
                    console.log("token verified!");
                    next();
                }
            });
        }
    }
};
