import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";

// config for private routes

import privateRouteConfig from "./config/router.config";

// database connection

import ConnectDB from "./database/connection";

import Auth from "./api/auth";
import Food from "./api/food";
import Restaurant from "./api/restaurant";
import User from "./api/user";
import Menu from "./api/menu";
import Order from  "./api/order"

dotenv.config();

// adding additional passport configuration
privateRouteConfig(passport);

const zomato = express();

zomato.use(express.json());
zomato.use(session({ secret: process.env.JWTSECRET }));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get("/", (req, res) => {
  res.json({
    message: "Server is running !!!",
  });
});

// auth/signup
zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user", User);

zomato.use("/order", Order);
zomato.use("/menu", Menu);

const PORT = 4000;

zomato.listen(PORT, () => {
  ConnectDB()
    .then(() => {
      console.log("Server is running... ");
    })
    .catch((error) => {
      console.log("Server is running, but database connection failed...");
      console.log(error);
    });
});
