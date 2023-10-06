import Task from "../../models/tasks.model.js";

/* --- GET TASKS --- */

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks)
    } catch (error) {
        res.status(40).json(error)
    }
};

/* ----------------- */


/* --- CREATE TASK --- */

const createTask = async (req, res) => {
    try {
        const newTask = req.body;
        await Task.create(newTask);
        res.status(201).end();
    } catch (error) {        
        res.status(400).json(error);
    }
};

/* ------------------- */


/* --- UPDATE TASK --- */

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const task = await Task.update(body, {
            where: { id }
        });
        res.json(task);
    } catch (error) {
        res.status(400).json(error);
    }
};

/* ------------------- */


/* --- DELETE TASK --- */

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.destroy({
            where: { id }
        });
        res.status(204).end();
    } catch (error) {    
        res.status(400).json(error);
    }
};

/* ------------------- */

export { getAllTasks, createTask, updateTask,deleteTask };