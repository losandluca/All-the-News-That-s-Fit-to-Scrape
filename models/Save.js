// Require mongoose and creating schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create article schema
var SaveSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    summary: {
        type: String,
    },
    byline: {
        type: String,
    },
    // This saves the note and references it in the note model
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// Create the Save model with the SaveSchema
var Save = mongoose.model("Save", SaveSchema);

module.exports = Save;