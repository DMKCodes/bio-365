const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;
const Article = require('./article');

const userSchema = new Schema({
    email: {
        type: String,
        default: '',
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    refreshToken: String,
    savedArticles: [Article.schema]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);