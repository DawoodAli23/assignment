"use strict";

const { Model } = require("sequelize");
const user_profile = require("./user_profile");
module.exports = (sequelize, DataTypes) => {
    class Tenant_Profile extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }
    Tenant_Profile.init(
        {
            tenat_name: {
                type: DataTypes.STRING,
            },
            address: {
                type: DataTypes.JSON,
            },
            city: {
                type: DataTypes.STRING,
            },
            state: {
                type: DataTypes.STRING,
            },
            country: {
                type: DataTypes.STRING,
            },
            zip_code: {
                type: DataTypes.STRING,
            },
            phone: {
                type: DataTypes.STRING,
            },
            web_url: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "Tenant_Profile",
        }
    );
    return Tenant_Profile;
};
