const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

//api/citas/
router.post("/", bookController.addBook);
router.get("/", bookController.loadBooks);
router.put("/:id", bookController.updateBook);
router.get("/:id", bookController.loadBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
