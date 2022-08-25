const express = require("express");
const {
    createUser,
    findAll,
    findSingle,
    deleteSingle,
    updateSingle,
} = require("../controllers/user");
const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("user endpoint is working");
// });

router.post("/", createUser);
router.get("/", findAll);
router.get("/:id", findSingle);
router.delete("/:id", deleteSingle);
router.patch("/:id", updateSingle);
module.exports = router;
