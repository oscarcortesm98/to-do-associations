import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Category = db.define("categories", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement:true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },    
},
{ timestamps:false }
)

export default Category;