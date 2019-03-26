// Require mongoose and create a schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create article schema
let ArticleSchema = new Schema({
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
    // This will save a note
    note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

// Create the Article model with the ArticleSchema
const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;