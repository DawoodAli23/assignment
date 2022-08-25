// const { where } = require("sequelize/types");

const db = require("../models/index");
const Tenant_Profile = db.tenant;
exports.createTenant = async (req, res) => {
    console.log("======> this is being hit", req.body);

    const tenant = Tenant_Profile.build(
        ({
            tenat_name,
            address,
            city,
            state,
            country,
            zip_code,
            phone,
            web_url,
        } = req.body)
    );

    try {
        const result = await tenant.save();
        res.send("Tenant Created!");
    } catch (error) {
        res.send({ error });
    }
};

exports.findAll = async (req, res) => {
    try {
        const result = await Tenant_Profile.findAll();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
};

exports.findSingle = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Tenant_Profile.findByPk(id);
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
        const row = await Tenant_Profile.findByPk(id);
        if (row) {
            await row.destroy();
            res.send(`Tenant with id ${id} deleted`);
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
        const result = await Tenant_Profile.update(
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
