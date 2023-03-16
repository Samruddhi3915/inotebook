const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  //   res.json([]);
  console.log(req.body);
  res.send("Hey Sam");
});
module.exports = router;
