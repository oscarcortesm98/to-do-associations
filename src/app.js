import express from "express";
import db from "./utils/database.js";
import cors from "cors";
import initModels from "./models/initModels.js";
import "dotenv/config";

import categoryRoutes from "./components/categories/categories.routes.js"
import taskRoutes from "./components/tasks/tasks.routes.js"
import userRoutes from "./components/users/users.routes.js"

initModels();

const PORT = process.env.PORT ?? 8000;

/* --- TEST DATABASE CONNECTION --- */

db.authenticate()
.then(() => {
    console.log('Connection successfull.');
})
.catch((error) => console.log(error));

/* -------------------------------- */


/* --- SYNC DATABASE --- */

db.sync(/* { force: true } */)
.then(() => {
  console.log('Database correctly synchronized.');
})
.catch((error) => console.log(error));

/* --------------------- */


const app = express();

app.use(express.json());
app.use(cors());


/* --- HEALTH CHECK --- */

app.get('/', (req, res) => {
    res.send('Ok.')
});

/* -------------------- */

/* --- ROUTES --- */

app.use(categoryRoutes)
app.use(taskRoutes)
app.use(userRoutes)

/* -------------- */

/* --- SERVER --- */

app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`);
})

/* -------------- */


