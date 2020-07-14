const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// ? API ROUTES 
router.use("/api", apiRoutes);

// ? If no routes are hit, send default React App
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

module.exports = router;