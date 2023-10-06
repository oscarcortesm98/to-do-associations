import Category from "../../models/categories.model.js";

/* --- GET CATEGORIES --- */

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories)
    } catch (error) {        
        res.status(400).json(error)
    }
};

/* ---------------------- */


/* --- CREATE CATEGORY --- */

const createCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        await Category.create(newCategory);
        res.status(201).end();
    } catch (error) {        
        res.status(400).json(error);
    }
};

/* ----------------------- */

export { getAllCategories, createCategory };