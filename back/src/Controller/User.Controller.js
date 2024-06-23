const express = require("express");
const USER = require("../Model/User.Model");

async function GetAllUsers(req, res) {
  try {
    const allusers = await USER.find();
    res.status(200).json(allusers);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

async function GetUser(req, res) {
  let id = req.params.id;

  try {
    let user = await USER.findOne(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

async function GetUserByName(req,res) {
  let userByName = req.body.Name;
  try {
    const user = await User.findOne(userByName)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send({message: error})
  }
}

async function CreateUser(req, res) {
  const newuser = new USER({
    Name: req.body.Name,
    Nationallity: req.body.Nationallity,
    Personality: req.body.Personality,
    Habilities: req.body.Habilities,
    Age: req.body.Age,
    Status: req.body.Status,
    Image: req.body.Image,
  });

  try {
    let user = await newuser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

async function UpdateUser(req, res) {
  try {
    let userupdate = await USER.updateOne(
      { _id: req.params.id },
      {
        $set: {
          Name: req.body.Name,
          Nationallity: req.body.Nationallity,
          Personality: req.body.Personality,
          Habilities: req.body.Habilities,
          Age: req.body.Age,
          Status: req.body.Status,
          Image: req.body.Image,
        },
      }
    );

    res.status(200).json(userupdate);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

async function DeleteUser(req, res) {
  let id = req.params.id;
  try {
    await USER.findByIdAndDelete(id);
    res.status(200).json("Well Done");
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

module.exports = {
  GetAllUsers,
  GetUser,
  GetUserByName,
  CreateUser,
  UpdateUser,
  DeleteUser,
};
