const express = require("express");
const router = express.Router();
db = require("../models");
const { Event } = db;
const { Op } = require("sequelize");
const band = require("../models/band");

router.get("/", async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [["name", "ASC"]],
            where: {
                name: { [Op.like]: `%${req.query.name}` },
            },
        });
        res.statusMessage(200).json(foundEvents);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(200).json({
            message: "post completed",
            data: newEvent,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedEvent = await Event.update(req.body, {
            where: { event_id: req.params.id },
        });
        res.status(200).json({
            message: "put completed",
            data: updatedEvent,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedEvent = await Event.destroy(req.body, {
            where: {
                event_id: req.params.id,
            },
        });
    } catch (error) {
        res.status(500).json(error, {
            message: "delete failed",
        });
    }
});

module.exports = router;
