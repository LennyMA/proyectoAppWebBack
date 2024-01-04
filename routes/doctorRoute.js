const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

//api/medicos/
router.post("/", doctorController.addDoctor);
router.get("/", doctorController.loadDoctors);
router.put("/:id", doctorController.updateDoctor);
router.get("/:id", doctorController.loadDoctor);
router.delete("/:id", doctorController.deleteDoctor);

module.exports = router;
