const router = require("express").Router();
// const { where } = require("sequelize/types");
const db = require("../models");
const { Stage } = db;
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            order: [["available_start_time", "ASC"]],
            where: {
                name: { [Op.like]: `%${req.query.name}` },
            },
        });
        res.status(200).json(foundStages);
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const foundStage = await Stage.findByOne({
            where: { stage_id: req.params.id },
        });
        res.status(200).json(foundStage);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const newStage = await Stage.create(req.body);
        res.status(200).json({
            message: "Post Completed",
            data: newStage,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id,
            },
        });
        res.status(200).json({
            message: `Updated ${updatedStages}`,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedStage = await Stage.destroy(req.body, {
            where: {
                stage_id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Stage deleted",
        });
    } catch (error) {
        res.status(500), json(error);
    }
});

module.exports = router;
