const express = require("express");
const {
  GetAllUsers,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
} = require("../Controller/User.Controller");

const UserRouter = express.Router();

UserRouter.get("users/", GetAllUsers);
UserRouter.get("users/:id", GetUser);
UserRouter.post("users/", CreateUser);
UserRouter.put("users/:id", UpdateUser);
UserRouter.delete("users/:id", DeleteUser);

module.exports = UserRouter;