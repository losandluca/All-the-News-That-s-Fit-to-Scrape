// Require mongoose and create a schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Note schema
let NoteSchema = new Schema({
    article_id: {
        type: Schema.Types.ObjectId
    },
    body: {
        type: String
    }
});

// Create the Note model with the NoteSchema
const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;