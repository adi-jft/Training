const express=require("express");
const controller=require("../controllers/controller");
const router=express.Router();

router.get("/employees", controller.empget);
router.post("/employees/post", controller.emppost);
router.put("/employees/put/:id", controller.empput);
router.delete("/employees/delete/:id", controller.empdelete);

module.exports=router
