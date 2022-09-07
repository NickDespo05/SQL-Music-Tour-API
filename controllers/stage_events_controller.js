const stage_events = require("express").Router();
// const { where } = require("sequelize/types");
const db = require("../models");
const { Events } = db;
const { Op } = require("sequelize");

stage_events.get("/", async (req, res) => {
    try {
        const foundEvents = await Events.findAll({
            where: {
                name: { [Op.like]: `%${req.query.name}` },
            },
        });
        res.status(200).json(foundEvents);
    } catch (error) {
        res.status(500).json(error);
    }
});
stage_events.get("/:id", async (req, res) => {
    try {
        const foundEvents = await Events.findByOne({
            where: { band_id: req.params.id },
        });
        res.status(200).json(foundEvents);
    } catch (error) {
        res.status(500).json(error);
    }
});

stage_events.post("/", async (req, res) => {
    try {
        const newEvent = await Events.create(req.body);
        res.status(200).json({
            message: "Post Completed",
            data: newEvent,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

stage_events.put("/:id", async (req, res) => {
    try {
        const updatedEvents = await Events.update(req.body, {
            where: {
                band_id: req.params.id,
            },
        });
        res.status(200).json({
            message: `Updated ${updatedEvents}`,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

stage_events.delete("/:id", async (req, res) => {
    try {
        const deletedEvent = await Events.destroy(req.body, {
            where: {
                band_id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Book deleted",
            data: deletedEvent,
        });
    } catch (error) {
        res.status(500), json(error);
    }
});

module.exports = stage_events;
