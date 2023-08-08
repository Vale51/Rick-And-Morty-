const  router  = require("express").Router()
const getCharById = require("../controllers/getCharById")

router.get('/character/:id', getCharById)

module.exports = router

