const { json } = require('express');
const express = require('express');
const router = express.Router();
const book = require('../model/Book');
const booksController = require('../controller/bookController');


router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBooks);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;