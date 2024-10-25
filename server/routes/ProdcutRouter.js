const productController = require("../controllers/ProductController");

const express = require("express");

const router = express.Router();

router.post("/createProduct", productController.createProduct);
router.get("/getAllProducts", productController.getAllProducts);
module.exports = router;
