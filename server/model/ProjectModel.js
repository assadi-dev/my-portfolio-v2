const mongoose = require("mongoose");

const ProjectModel = mongoose.Schema({
    preview: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: false,
    },
    slug: {
        type: String,
        required: false,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("project", ProjectModel);