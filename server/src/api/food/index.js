import express from "express";

import { FoodModel } from "../../database/allModels";
import { validateCategory } from "../../validation/common.validations";

const Router = express.Router();

/**
 * Route    /:id
 * Desc     get food based on id
 * Params   _id
 * Access   public
 * Method   Get
 *
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId(req.params);
    const food = await FoodModel.findById(_id);
    return res.json({ food });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route    /r/:id
 * Desc     get all food based on particular restaurant
 * Params   _id
 * Access   public
 * Method   Get
 *
 */

Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId(req.params);
    const foods = await FoodModel.find({
      restaurant: _id,
    });
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route    /c/:category
 * Desc     get all food based on particular category
 * Params   category
 * Access   public
 * Method   Get
 *
 */

Router.get("/c/:category", async (req, res) => {
  try {
    const { category } = req.params;
    await validateCategory(req.params);
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    if (!foods)
      return res
        .status(404)
        .json({ error: `No food matched with ${category}` });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// c:non
// non ==== nonveg
// non ===  nonassadg  using regex

export default Router;
