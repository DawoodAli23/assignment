const express = require("express");
const {
    createTenant,
    findAll,
    findSingle,
    deleteSingle,
    updateSingle,
} = require("../controllers/tenant");
const { route } = require("./user.routes");
const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("tenant endpoint is working");
// });

router.post("/", createTenant);
router.get("/", findAll);
router.get("/:id", findSingle);
router.delete("/:id", deleteSingle);
router.patch("/:id", updateSingle);
module.exports = router;
