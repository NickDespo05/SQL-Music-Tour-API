"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const Stage = sequelize.define("Stage", { stage_id: DataTypes.INTEGER });
const Event = sequelize.define("Event", { event_id: DataTypes.INTEGER });
module.exports = (sequelize, DataTypes) => {
    class Meet_Greet extends Model {
        static associate(models) {}
    }
    Meet_Greet.init(
        {
            stage_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: Stage,
                    key: "id",
                },
            },
            event_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: Event,
                    key: "id",
                },
            },
            meet_start_time: DataTypes.DATE,
            meet_end_time: DataTypes.DATE,
            meet_greet_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
        },
        {
            sequelize,
            modelName: "Meet_Greet",
        }
    );
    return Meet_Greet;
};
