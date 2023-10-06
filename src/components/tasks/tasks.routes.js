import { Router } from "express";
import { getAllTasks, createTask, deleteTask, updateTask } from "./tasks.controller.js";

const router = Router();

router
.route('/tasks')
.get(getAllTasks)
.post(createTask)

router
.route('/tasks/:id')
.put(updateTask)
.delete(deleteTask)

export default router