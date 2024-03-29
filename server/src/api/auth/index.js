import express from "express";
import passport from "passport";

import { UserModel } from "../../database/allModels";
import { validateSignUp } from "../../validation/auth.validation";
import { validateSignIn } from "../../validation/auth.validation";

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

/**
 * Route    /google
 * Desc     get user signin using google authentication
 * Params   none
 * Access   private
 * Method   GET
 *
 */

/*
Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

// if your google authentication was fail then where should it redirect to user
// it will redirect user to following route ->  '/'
// if successful then redirect user to the front end

Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
   // return res.status(200).json({
    //  token: req.session.passport.user.token,
    //});

    return res.redirect(`http://localhost:3000/google/${req.session.passport.user.token}`)
  }
);
*/

export default Router;
