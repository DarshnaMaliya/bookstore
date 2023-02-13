const { json } = require('express');
const express = require('express');
const router1 = express.Router();
const user = require('../model/User');
const userContoller = require("../controller/userContoller");

router1.get("/", userContoller.getAllUsers);
router1.post("/signup", userContoller.registerUser);
router1.post("/login", userContoller.login);
// router.put("/:id", booksController.updateBook);
// router.delete("/:id", booksController.deleteBook);

module.exports = router1;