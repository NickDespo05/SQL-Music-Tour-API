// DEPENDENCIES
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//SEQUELIZE CONNECTION

// ROOT
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Tour API",
    });
});

const stageController = require("./controllers/stage_controller.js");
app.use("/stage", stageController);

const eventController = require("./controllers/event_controller.js");
app.use("/events", eventController);

const bandController = require("./controllers/band_controller");
app.use("/bands", bandController);

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
