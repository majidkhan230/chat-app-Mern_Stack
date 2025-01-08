import express from "express";
import authMiddleware from "../middlewares/authMiddlewares.js";
import userModel from "../models/user.js";

const userRoutes = express.Router();

userRoutes.get("/get-logged-user", authMiddleware, async (req, res) => {
  const user = await userModel.findOne({ _id: req.body.userId });

  res.status(200).send({
    message: "Fetch User Successfully",
    sucess: true,
    user: user,
  });
});

userRoutes.get("/get-all-users", authMiddleware, async (req, res) => {
    const userId = req.body.userId;

    const users = await userModel.find({ _id: { $ne: userId } });

    res.status(200).send({
      message: "Fetch All Users Successfully",
      sucess: true,
      users: users,
    });
  }
)


export default userRoutes;
