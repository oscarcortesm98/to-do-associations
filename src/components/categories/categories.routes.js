import { Router } from "express";
import { getAllCategories, createCategory } from "./categories.controller.js";

const router = Router();

router
.route('/categories')
.get(getAllCategories)
.post(createCategory)

export default router