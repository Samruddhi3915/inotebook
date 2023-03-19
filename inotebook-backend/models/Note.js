const mongoose = require("mongoose");
const { Schema } = mongoose;
const NoteSchema = new Schema({
  //since we only need to show the notes associated with a particular user we make use of id it's like foreign key
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", //giving reference model
  },
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
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("notes", NoteSchema);
