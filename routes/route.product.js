const express = require("express");
const {
  insertProduct,
  welcome,
  getProduct,
  updateProduct,
  bulkProductUpdate,
  deleteProductById,
  bulkDeleteById,
  uploadImage,
  getProductById,
} = require("../controllers/controller.product");
const productRouter = express.Router();

const { router } = require("../app");
const uploader = require("../middlewear/middlewear.upload");

// productRouter.post("/upload-image", uploader.single("image"), uploadImage);
productRouter.post("/upload-image", uploader.array("image"), uploadImage);
productRouter.get("/all-product", getProduct);
productRouter.post("/insert", insertProduct);
productRouter.patch("/bulk-update", bulkProductUpdate);
productRouter.delete("/bulk-delete", bulkDeleteById);
productRouter.patch("/product/:id", updateProduct);
productRouter.delete("/product/:id", deleteProductById);
productRouter.get("/product/:id", getProductById);
module.exports = { productRouter };
