import express from "express";
import ItemController from "./controllers/items-controller";
const router = express.Router();
router.get("/api/items", ItemController.search);
router.get("/api/items/:id", ItemController.getItem);
export default router;
