const express = require("express");
const { createDoctor,updatedoctor,getAlldoctors,getdoctorDetails,deleteDoctor} = require("../controllers/doctorController");
const { isAdmin, auth} = require("../middlewares/auth")

const router = express.Router();

router.post("/new", auth, isAdmin, createDoctor)
router.get("/all-doctor", getAlldoctors)
router.put("/:id", auth, isAdmin, updatedoctor)
router.delete("/:id", auth, isAdmin, deleteDoctor)
router.get("/:id", auth, isAdmin, getdoctorDetails)
module.exports = router ;