import express from "express";

import { UserModel } from "../../database/allModels";
import passport from "passport";

const Router = express.Router();

/**
 * Route    /
 * Desc     get authorized user data
 * Params   none
 * Access   private
 * Method   GET
 *
 */

Router.get("/", async (req, res) => {
  try {
    const { email, fullName, phoneNumber, address } = req.user;

    return res.json({ user: { email, fullName, phoneNumber, address } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
