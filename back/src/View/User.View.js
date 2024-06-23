const express = require("express");
const cors = require("cors");

const whiteList = {
  origin: "https://www.flickr.com",
  optionsSuccessStatus: 200,
};

const {
  GetAllUsers,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
} = require("../Controller/User.Controller");

const UserRouter = express.Router();

UserRouter.get("/get-all-users/", cors(whiteList), GetAllUsers);
UserRouter.get("/get-a-user/:id", cors(whiteList), GetUser);
UserRouter.post("/create-a-user/", cors(whiteList), CreateUser);
UserRouter.put("/update-a-user/:id", cors(whiteList), UpdateUser);
UserRouter.delete("/delete-a-user/:id", cors(whiteList), DeleteUser);

module.exports = UserRouter;
