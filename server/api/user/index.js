import express from "express";

import { UserModel } from "../../database/allModels";
import passport from "passport";
import { validateUpdateUser } from "../validation/common.validations";

const Router = express.Router();

/**
 * Route    /
 * Desc     get authorized user data
 * Params   none
 * Access   private
 * Method   GET
 *
 */

Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { email, fullName, phoneNumber, address } = req.user;

      return res.json({ user: { email, fullName, phoneNumber, address } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * Route    /:id
 * Desc     get user data (for the review system)
 * Params   _id
 * Access   public
 * Method   GET
 *
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId(req.params);

    const getUser = await UserModel.findById(_id);

    if (!getUser) {
      return res.status(404).json({ error: "User not found!" });
    }

    const { fullName } = getUser;

    return res.json({ user: { fullName } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route    /update/:id
 * Desc     update user data
 * Params   _id
 * Access   private
 * Method   GET
 *
 */

Router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { id } = req.params;

      const { userData } = req.body;
      await validateUpdateUser(req.body);

      // as if user try to change password he could not
      // as the field is undefined
      userData.password = undefined;

      const updateUser = await UserModel.findByIdAndUpdate(
        id,
        {
          $set: userData,
        },
        {
          new: true,
        }
      );

      return res.json({ user: updateUser });
    } catch (error) {
      return res.status(500).json({ error: error.status });
    }
  }
);

export default Router;
