import express from "express";

import { RestaurantModel } from "../../database/allModels";
import {
  validateRestaurantCity,
  validateSearchString,
} from "../../validation/restaurant.validations";

const Router = express.Router();

/**
 * Route    /:city
 * Desc     get all the restaurant based on city
 * Params   none
 * Access   public
 * Method   Get
 *
 */

Router.get("/", async (req, res) => {
  try {
    // http://localhost:4000/restaurant/?city=mumbai
    const { city } = req.query;
    await validateRestaurantCity(req.query);
    const restaurants = await RestaurantModel.find({ city });
    if (restaurants.length === 0) {
      return res.json({ error: "No restaurant found in this city" });
    }
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route    /:_id
 * Desc     get particular restaurant details based on id
 * Params   _id
 * Access   public
 * Method   Get
 *
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    //await validateId(req.params);
    const restaurant = await RestaurantModel.findById(_id);
    if (!restaurant)
      return res.status(404).json({ error: "Restaurant does not exits" });

    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route    /search/:searchString
 * Desc     get individual restaurant based on name as search string
 * Params   searchString
 * Access   public
 * Method   Get
 *
 */

Router.get("/search/:searchString", async (req, res) => {
  try {
    const { searchString } = req.params;
    //await validateSearchString(req.params);
    const restaurants = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });

    if (restaurants.length === 0) {
      return res.status(404).json({ error: "No such restaurant exist" });
    }

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
