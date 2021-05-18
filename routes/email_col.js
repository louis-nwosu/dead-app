const Email = require("../controllers/emailController");
const router = require("express").Router();

router.post("/send-mail", Email);

module.exports = router;
