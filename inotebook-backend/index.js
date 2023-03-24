const express = require("express");
var cors = require("cors");
const router = express.Router();
const app = express();
const port = process.env.PORT || 5001;
const connectToMongo = require("./db");
connectToMongo();
//available routes
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.listen(port, () => {
  console.log(`inotebook backend  listening on port ${port}`);
});
