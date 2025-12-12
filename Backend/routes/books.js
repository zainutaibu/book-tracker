const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/bookController");

router.post("/", ctrl.createBook);
router.get("/", ctrl.getBooks);
router.get("/:id", ctrl.getBook);
router.put("/:id", ctrl.updateBook);
router.delete("/:id", ctrl.deleteBook);
router.post("/:id/rate", ctrl.rateBook);

module.exports = router;
