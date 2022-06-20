import { BAD_REQUEST } from "http-status";
import User from "../models/user.model"

const createUser = async (userBody) => {
    return User.create(userBody)
}

const getUsers = async () => {
    return User.findMany();
}

const getUserById = async (id) => {
    return User.findByPk(id)
}

const updateUser = async (id, updateUser) => {
    let user = await getUserById(id)
    if (!user) {
        throw new Error(BAD_REQUEST)
    }
    user = Object.assign(user, updateUser)

    console.log(user)
    user.save()
    return user
}

const deleteUser = async (id) => {
    const user = await getUserById(id)
    if(!user) {
        throw new Error(BAD_REQUEST)
    }
    await user.destroy()
}

export default {
    createUser,
    updateUser,
    deleteUser
}