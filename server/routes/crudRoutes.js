const express = require("express");
const router = express.Router();
const crudController = require("../controllers/crudController");
const authController = require("../controllers/AuthController");
const varification = require('../middleware/AuthMiddleware');
router.post("/signup", authController.Signup);
router.post("/login",authController.Login);
router.post('/submit',varification,authController.Submit);
module.exports = router;
