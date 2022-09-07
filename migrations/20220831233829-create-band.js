"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Bands", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            band_id: {
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            genre: {
                type: Sequelize.TEXT,
            },
            available_start_time: {
                type: Sequelize.DATE,
            },
            end_time: {
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Bands");
    },
};
