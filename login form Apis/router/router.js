const express = require("express")
const loginCon = require("../controllers/login")
const singupcon = require("../controllers/singup")


const router = express.Router()

router.post("/api/singup" , singupcon)
router.post("/api/login",loginCon)

module.exports = router
