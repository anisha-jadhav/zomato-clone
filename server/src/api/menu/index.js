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
    const menus = await MenuModel.findById(_id);

    if (!menus) {
      return res
        .status(404)
        .json({ error: "No menu present for this restaurant" });
    }

    return res.json({ menus });
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

Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const menuImages = await ImageModel.findById(_id);

    if (!menuImages) {
      return res.status(404).json({ message: "No menu images found." });
    }

    return res.json({ menuImages });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
