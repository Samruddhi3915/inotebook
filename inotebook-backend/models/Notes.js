const mongoose = require("mongoose");
const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: date,
    default: Date.now,
  },
});
module.exports = mongoose.model("notes", NoteSchema);
