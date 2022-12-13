const express=require("express");
const controller=require("../controllers/controller");
const router=express.Router();
const auth=require("../middleware/auth");

router.get("/", controller.loginPage);
// router.post("/jwt", controller.jwt);
router.get("/employees", controller.empget);
router.post("/employees/post", controller.emppost);
router.post("/employees/delete/:id", controller.empdelete);
router.post("/employees/edit/:id", controller.empedit);
router.post("/employees/save", controller.empsave);
router.post("/employees/search", controller.empsearch);

// router.use(auth.authtoken);

module.exports=router