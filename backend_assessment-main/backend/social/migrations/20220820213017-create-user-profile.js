"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("User_Profiles", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            first_name: {
                type: Sequelize.STRING,
            },
            last_name: {
                type: Sequelize.STRING,
            },
            department: {
                type: Sequelize.STRING,
            },
            designation: {
                type: Sequelize.STRING,
            },
            tenant_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Tenant_Profiles",
                    key: "id",
                },
            },
            img_url: {
                type: Sequelize.STRING,
            },
            city: {
                type: Sequelize.STRING,
            },
            country: {
                type: Sequelize.STRING,
            },
            bio: {
                type: Sequelize.STRING,
            },
            social_links: {
                type: Sequelize.JSON,
            },
            employee_id: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("User_Profiles");
    },
};
