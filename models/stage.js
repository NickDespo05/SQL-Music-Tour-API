"use strict";
const { Model } = require("sequelize");
const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
    class Stage extends Model {
        static associate(models) {}
    }
    Stage.init(
        {
            stage_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            stage_name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Stage",
        }
    );
    return Stage;
};
