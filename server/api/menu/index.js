import express from "express";

import { MenuModel } from "../../database/menu";
import { ImageModel } from "../../database/image";

const Router = express.Router();

/**
 * Route    /list/:id
 * Desc     get all menus based on menu id
 * Params   id
 * Access   public
 * Method   GET
 *
 */

Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const food = await MenuModel.findById(_id);

    if (!food) {
      return res
        .status(404)
        .json({ error: "No menu present for this restaurant" });
    }

    return res.json({ food });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


/**
 * Route    /images
 * Desc     get all list of menu images with id
 * Params   id
 * Access   public
 * Method   GET
 *
 */

Router.get("/images/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getImages = await ImageModel.findById(id);
    if (!getImages) {
      return res.status(404).json({ error: "No menu images found" });
    }
    return res.json({ menuImages : getImages });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
