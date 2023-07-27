import express from "express";

import { ReviewModel } from "../../database/allModels";
import passport from "passport";

const Router = express.Router();

/**
 * Route    /:resId
 * Desc     get all review based on restaurant id
 * Params   restaurant id
 * Access   public
 * Method   GET
 *
 */

Router.get("/:resId", async (req, res) => {
  try {
    const { resId } = req.params;
    //await validateId(req.params);

    const getReview = await ReviewModel.find({
      restaurant: resId,
    }).sort({ created_at: -1 });

    if (getReview.length == 0) {
      return res.status(404).json({ error: "No reviews for the restaurant" });
    }

    return res.json({ getReview });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route    /new
 * Desc     add new review for food or restaurant
 * Params   none
 * Access   private
 * Method   Post
 *
 */

Router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.user;
      // await validateId(req.params);
      const { reviewData } = req.body;

      const review = await ReviewModel.create({ ...reviewData, user: _id });

      return res.json({ message: "New review added successfully", review });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * Route    /delete/:id
 * Desc     delete my own review
 * Params   review id
 * Access   private
 * Method   Delete
 *
 */

Router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;
      const { id } = req.params;
      //await validateId(req.params);

      const delReview = await ReviewModel.findOneAndDelete({
        _id: id,
        user: user._id,
      });

      if (!delReview) {
        return res.json({ message: "Review not exists!" });
      }

      return res.json({ message: "Review deleted successfully", delReview });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default Router;
