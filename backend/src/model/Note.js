import mongoose from "mongoose";

// create a schema
// create a model based of that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
