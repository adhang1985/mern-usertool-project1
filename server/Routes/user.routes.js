const express = require("express");
const { createUser, getAllUsers, updateUser, getUserById, deleteUser } = require("../Controllers/user.controller");
const route = express.Router();

route.post("/create",createUser);
route.get("/",getAllUsers);
route.get("/:id",getUserById);
route.put("/:id",updateUser);
route.delete("/:id",deleteUser);

module.exports = route;