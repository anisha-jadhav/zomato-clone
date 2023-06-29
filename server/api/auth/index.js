import express from "express";

import { UserModel } from "../../database/allModels";
import { validateSignUp } from "../validation/auth.validation";

const Router = express.Router();

/**
 * Route    /signup
 * Desc     create new user and create jwt token
 * Params   none
 * Access   public
 * Method   POST
 *
 */
Router.post("/signup", async (req, res) => {
  try {
    await validateSignUp(req.body.credentials);
    await UserModel.findByEmailAndPhone(req.body.credentials);

    const newUser = await UserModel.create(req.body.credentials);
    const token = newUser.generateJwtToken();
    return res.status(200).json({ token, status: "Success" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /signin
 * Desc     get user logged in and generate token for next 24 hours
 * Params   none
 * Access   public
 * Method   POST
 *
 */
Router.post("/signin", async (req, res) => {
  try {
    await validateSignIn(req.body.credentials);
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const token = user.generateJwtToken();

    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
