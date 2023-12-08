const mongoose = require("mongoose");

const headlineSchema = new mongoose.Schema({
    original: {
        type: String,
    },
    modified: {
        type: String,
    },
    biasSummary: {
        type: String,
    },
    articleLink: {
        type: String,
    },
});
const HeadlineModel = mongoose.model("Headline", headlineSchema);

module.exports = { HeadlineModel }
