"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
module.exports = (sequelize, DataTypes) => {
    class Event extends Model {
        static associate(models) {}
    }
    Event.init(
        {
            event_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: DataTypes.STRING,
            event_date: DataTypes.DATE,
            start_time: DataTypes.DATE,
            ent_time: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Events",
        }
    );
    return Event;
};
