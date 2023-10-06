import { Router } from "express";
import { getAllUsers, createUser } from "./users.controller.js";

const router = Router();

router
.route('/users')
.get(getAllUsers)
.post(createUser)

export default router