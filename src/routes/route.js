const express = require('express');
const router = express.Router();
const ProjectController = require("../controller/controllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// College Route...


router.post("/functionup/colleges",ProjectController.college)
router.post("/functionup/interns",ProjectController.intern)


//Intern Route...

router.get("/getcollegeName",ProjectController.getCollege)

module.exports = router;