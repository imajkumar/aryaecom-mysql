var express = require("express");
const upload = require('../multer');

const UserController = require("../controllers/UserController");
const {checkSchema} = require('express-validator');
var router = express.Router();
const {
  adminRegisterSchema,
  adminLoginSchema    
  } = require("../routes/validator");

  
//router.post("/userLogin", UserController.userLogin);
//router.post("/uploadGallery", upload.array('Images',2), UserController.userUpload);
//router.post("/uploadAvatar", upload.single('avatar'), UserController.userAvatar);

//router.post("/userRegister", UserController.userRegister);
//router.post("/ajkumar", UserController.ajkumar);
//router.post("/userLogin",checkSchema(registrationSchema), UserController.userLogin);
//router.post("/checkMobileRegistered",checkSchema(checkMobileRegistered), UserController.checkMobileRegistered);

router.post("/adminRegister",checkSchema(adminRegisterSchema),UserController.adminRegister);
router.post("/adminLogin",checkSchema(adminLoginSchema),UserController.adminLogin);
router.post("/getuser",checkSchema(adminLoginSchema),UserController.getuser);



module.exports = router;

//http://localhost:4002/api/uploadGallery
