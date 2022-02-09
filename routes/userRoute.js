const express = require("express");
const router = express.Router();
const user_data = require("../controllers/userController");
const multer = require("multer");
const upload = multer();
const cors = require("cors");

//middleware
router.use(cors());
router.use(express.json());

router.get("/get", user_data.user_get_data);

router.post("/signup-data", upload.none(), user_data.user_signup_post_data);

router.post("/login-data", upload.none(), user_data.user_login_post_data);

router.use((req, res) => {
  res.send("404 Page Not Found!!");
});

module.exports = router;
