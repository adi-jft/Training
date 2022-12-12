const jwt=require("jsonwebtoken");
require("dotenv").config();

module.exports={
    authtoken: (req, res, next) => {
        // console.log(req.headers["authorization"]);
        // token=req.headers["authorization"];
        let token=req.cookies.key;
        if(!token){
            res.sendStatus(401);
        }
        else{
            // tokenbody=token.slice(7);
            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if(err){
                    res.sendStatus(401);
                }
                else{
                    console.log("token verified!");
                    next();
                }
            });
        }
        
    }
};
