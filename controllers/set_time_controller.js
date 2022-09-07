const times = require("express").Router();
// const { where } = require("sequelize/types");
const db = require("../models");
const { Time } = db;
const { Op } = require("sequelize");

times.get("/", async (req, res) => {
    try {
        const foundTimes = await Time.findAll({
            where: {
                name: { [Op.like]: `%${req.query.name}` },
            },
        });
        res.status(200).json(foundTimes);
    } catch (error) {
        res.status(500).json(error);
    }
});
times.get("/:id", async (req, res) => {
    try {
        const foundTime = await Time.findByOne({
            where: { band_id: req.params.id },
        });
        res.status(200).json(foundTime);
    } catch (error) {
        res.status(500).json(error);
    }
});

times.post("/", async (req, res) => {
    try {
        const newTime = await Time.create(req.body);
        res.status(200).json({
            message: "Post Completed",
            data: Time,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

times.put("/:id", async (req, res) => {
    try {
        const updatedTimes = await Time.update(req.body, {
            where: {
                set_time_id: req.params.id,
            },
        });
        res.status(200).json({
            message: `Updated ${updatedTimes}`,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

times.delete("/:id", async (req, res) => {
    try {
        const deletedTime = await Time.destroy(req.body, {
            where: {
                band_id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Set Time deleted",
        });
    } catch (error) {
        res.status(500), json(error);
    }
});

module.exports = times;
