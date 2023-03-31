const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    pubDate: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;