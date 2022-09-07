const meets = require("express").Router();
const db = require("../models");
const { Meet } = db;
const { Op } = require("sequelize");

meets.get("/", async (req, res) => {
    try {
        const foundMeet = await Meet.findAll({
            where: {
                name: { [Op.like]: `%${req.query.name}` },
            },
        });
        res.status(200).json(foundMeet);
    } catch (error) {
        res.status(500).json(error);
    }
});

meets.get("/:id", async (req, res) => {
    try {
        const foundMeets = await Meet.findOne({
            where: {
                meet_greet_id: req.params.id,
            },
        });
        res.status(200).json(foundMeets);
    } catch (error) {
        res.status(500).json(error);
    }
});

meets.post("/", async (req, res) => {
    try {
        const newMeet = await Meet.create(req.body);
        res.status(200).json({
            message: "meet created",
            data: newMeet,
        });
    } catch (error) {
        res.status(500).json({
            message: "post failed",
            data: error,
        });
    }
});

meets.put("/:id", async (req, res) => {
    try {
        const updatedMeet = await Meet.update(req.body, {
            where: {
                meet_greet_id: req.params.id,
            },
        });
        res.status(200).json(updatedMeet);
    } catch (error) {
        res.status(500).jsone(error);
    }
});

meets.delete("/:id", async (req, res) => {
    try {
        const deletedMeet = await Meet.destroy(req.body, {
            where: {
                meet_greet_id: req.params.id,
            },
        });
        res.status(200).json(deletedMeet);
    } catch (error) {
        res.status(500).json({
            message: "delete failed",
            data: deletedMeet,
        });
    }
});

module.exports = meets;
