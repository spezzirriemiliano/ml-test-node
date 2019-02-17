import express from "express";
import CategoryController from "./controllers/category-controller";
import ItemController from "./controllers/items-controller";
const router = express.Router();
router.get("/api/items", ItemController.search);
router.get("/api/items/:id", ItemController.getItem);
router.get("/api/categories/:id", CategoryController.getCategories);
export default router;
