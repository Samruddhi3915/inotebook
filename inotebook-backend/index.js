const express = require("express");
const router = express.Router();
const app = express();
const port = process.env.PORT || 5001;
const connectToMongo = require("./db");
connectToMongo();
//available routes
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello Sam!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
