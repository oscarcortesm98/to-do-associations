import User from "./users.model.js";
import Task from "./tasks.model.js";
import Category from "./categories.model.js";

const initModels = () => {
    
    /* --- TASK - CATEGORY --- */
    
    // Una tarea pertenece a una categoría
    Task.belongsTo(Category, {foreignKey: 'categoryId'});
    
    // Una categoría tiene muchas tareas
    Category.hasMany(Task, {foreignKey: 'categoryId'});
    
    /* ----------------------------- */
    

    /* --- USER - TASK --- */
    
    // Un usuario tiene muchas tareas
    User.belongsToMany(Task, {through: 'UserTasks'});
    
    // Una tarea tiene muchas usuarios
    Task.belongsToMany(User, {through: 'UserTasks'});
    
    /* ----------------------------- */
}

export default initModels;