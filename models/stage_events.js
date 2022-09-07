"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const Stage = sequelize.define("Stage", { stage_id: DataTypes.INTEGER });
const Event = sequelize.define("Event", { event_id: DataTypes.INTEGER });
module.exports = (sequelize, DataTypes) => {
    class Stage_Events extends Model {
        static associate(models) {}
    }
    Stage_Events.init(
        {
            stage_event_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            event_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: Event,
                    key: "id",
                },
            },
            stage_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: Stage,
                    key: "id",
                },
            },
        },
        {
            sequelize,
            modelName: "stage_events",
        }
    );
    return Stage_Events;
};
