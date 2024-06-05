const express = require("express");
const {
  GetAllUsers,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
} = require("../Controller/User.Controller");

const UserRouter = express.Router();

UserRouter.get("/get-all-users/", GetAllUsers);
UserRouter.get("/get-a-user/:id", GetUser);
UserRouter.post("/create-a-user/", CreateUser);
UserRouter.put("/update-a-user/:id", UpdateUser);
UserRouter.delete("/delete-a-user/:id", DeleteUser);

module.exports = UserRouter;