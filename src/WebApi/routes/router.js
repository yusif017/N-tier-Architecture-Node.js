const router = require("express").Router();
const user= require("./userRoutes");

router.use('/users',user);

module.exports = router;