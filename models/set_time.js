"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const Event = sequelize.define("Event", { event_id: DataTypes.INTEGER });
const Stage = sequelize.define("Stage", { stage_id: DataTypes.INTEGER });
const Band = sequelize.define("Band", { band_id: DataTypes.INTEGER });
module.exports = (sequelize, DataTypes) => {
    class Set_Time extends Model {
        static associates(models) {}
    }
    Set_Time.init(
        {
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
            band_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: Band,
                    key: "id",
                },
            },
            set_time_id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                primaryKey: true,
            },

            start_time: DataTypes.DATE,
            end_time: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Set_Time",
        }
    );
    return Set_Time;
};
