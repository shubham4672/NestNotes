import Note from "../model/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // sort in desc. order
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getAllNotes controller", error);
    res.state(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json(note);
  } catch (error) {
    res.status(404).json({ message: "Id not found" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title: title, content: content });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in creating a note" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });
    if (!updatedNote) {
      return res.status(404).json({ message: "note not found" });
    }
    res.status(200).json(updateNote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in updating a note" });
  }
}

export async function deleteNote(req, res) {
  try {
    const note = await Note.deleteOne({ _id: req.params.id });
    if (note.deletedCount === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting note" });
  }
}
