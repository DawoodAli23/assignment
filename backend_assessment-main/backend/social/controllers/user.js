// const { where } = require("sequelize/types");
const db = require("../models/index");
const User_Profiles = db.user;
exports.createUser = async (req, res) => {
    // console.log("======> this is being hit");

    const user = User_Profiles.build(
        ({
            first_name,
            last_name,
            department,
            designation,
            tenant_id,
            img_url,
            city,
            country,
            bio,
            social_links,
            employee_id,
        } = req.body)
    );

    try {
        const result = await user.save();
        res.send("User Created!");
    } catch (error) {
        res.send({ error });
    }
};

exports.findAll = async (req, res) => {
    try {
        const result = await User_Profiles.findAll();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
};

exports.findSingle = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await User_Profiles.findByPk(id);
        if (result) {
            res.send(result);
        }
        res.send("Nobody exist with the given id");
    } catch (error) {
        res.send(error);
    }
};

exports.deleteSingle = async (req, res) => {
    const { id } = req.params;
    try {
        const row = await User_Profiles.findByPk(id);
        if (row) {
            const deleted = await row.destroy();
            res.send(`User with id ${id} deleted`);
        }
        res.send("No row to delete");
    } catch (error) {
        res.send(error);
    }
};

exports.updateSingle = async (req, res) => {
    const { id } = req.params;
    const { fieldName, newData } = req.body;
    try {
        const result = await User_Profiles.update(
            { [fieldName]: newData },
            { where: { id } }
        );
        if (result[0]) {
            res.send("Updated");
        }
        res.send("Nobody exist with the given id or wrong params");
    } catch (error) {
        res.send(error);
    }
};
