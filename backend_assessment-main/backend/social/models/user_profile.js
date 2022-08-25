"use strict";

const { Model } = require("sequelize");
const tenant_profile = require("./tenant_profile");
module.exports = (sequelize, DataTypes) => {
    class User_Profile extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User_Profile.hasOne(models.Tenant_Profile, {
                foreignKey: "id",
                onDelete: "CASCADE",
            });
            // define association here
        }
    }
    User_Profile.init(
        {
            first_name: {
                type: DataTypes.STRING,
            },
            last_name: {
                type: DataTypes.STRING,
            },
            department: {
                type: DataTypes.STRING,
            },
            designation: {
                type: DataTypes.STRING,
            },
            tenant_id: {
                type: DataTypes.INTEGER,
            },
            img_url: {
                type: DataTypes.STRING,
            },
            city: {
                type: DataTypes.STRING,
            },
            country: {
                type: DataTypes.STRING,
            },
            bio: {
                type: DataTypes.STRING,
            },
            social_links: {
                type: DataTypes.JSON,
            },
            employee_id: {
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: "User_Profile",
        }
    );
    return User_Profile;
};
