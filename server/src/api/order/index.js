import express from "express";
import { OrderModel } from "../../database/order";
import passport from "passport";

const Router = express.Router();

/**
 * Route    /:id
 * Desc     get all order by user id
 * Params   user id
 * Access   private
 * Method   GET
 *
 */
// as it is validated route so even no need to pass id
Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;

      const getOrders = await OrderModel.findOne({ user: user });

      if (!getOrders) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json({ orders: getOrders });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * Route    /new
 * Desc     create oe update new order
 * Params   none
 * Access   private
 * Method   POST or PUT
 *
 */

Router.put(
  "/new",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;

      const { newOrderDetails } = req.body;

      //console.log(user);

      const newOrder = await OrderModel.findOneAndUpdate(
        {
          user: user._id,
        },
        {
          $push: {
            orderDetails: newOrderDetails,
          },
        },
        {
          new: true,
        }
      );
      return res.status(200).json({ order: newOrder });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default Router;
