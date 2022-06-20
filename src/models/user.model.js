import { UUIDV4 } from "sequelize";
import { DataTypes } from "sequelize";
import brcrypt from 'bcryptjs';

import db from './index'
const User = db.define("users", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Email already in use!'
        }
    }
},
{
    freezeTableName: true,
    tableName: 'users'
});

User.beforeCreate(async (user, options) => {
    user.password = await brcrypt.hash(user.password, 8)
});

User.beforeUpdate(async (user, options) => {
        user.password = await brcrypt.hash(user.password, 8)
})

User.prototype.comparePassword = async (password, user) => {
    return brcrypt.compare(password, user.password);
}

db.sync()
export default User;