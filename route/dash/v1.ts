import * as express from "express";
import UserController from "../../controllers/dash/v1/user.controller";
const route = express.Router();

// get all users
route.get("/users", UserController.getAll);
// add new user
route.post("/users", UserController.add);
// edit user
route.put("/users/:id", UserController.edit);

// delete user
route.delete("/users/:id", UserController.delete);

// get one

export default route;
