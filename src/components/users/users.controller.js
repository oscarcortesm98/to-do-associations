import User from "../../models/users.model.js";

/* --- GET USERS --- */

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(400).json(error);
    }
};

/* ----------------- */


/* --- CREATE USER --- */

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        await User.create(newUser);
        res.status(201).end();
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

/* ------------------- */

export { getAllUsers, createUser };