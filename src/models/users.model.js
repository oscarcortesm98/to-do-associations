import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement:true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
},
{ timestamps:false }
)

export default User;