import response from "../utils/responseTemp";
import httpStatus from "http-status";
import userServices from "../services/user.services";
import catchAsync from "../utils/catchAsync";



const createUser = catchAsync(async (req, res, next) => {
    const userPayload = req.body;
    const user = await userServices.createUser(userPayload);
    res.send(response(httpStatus.OK, 'User created!', user))
})

const getUsers = async() => {

}

const updateUser = catchAsync(async (req, res, next) => {
    const {id} = req.params;
    console.log(req.params);
    const updateUser = req.body;
    const user = await userServices.updateUser(id, updateUser)
    res.send(response(httpStatus.OK, 'Updated User!', user))
})

const deleteUser = catchAsync(async (req, res, next) => {
    const {id} = req.params;
    await userServices.deleteUser(id)
    res.send(response(httpStatus.OK, 'Deleted User!'))
})

export default {
    createUser,
    updateUser,
    deleteUser
}