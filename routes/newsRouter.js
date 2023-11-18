const express = require('express');
const newsRouter = express.Router();
const mongaRSS = require('../data/mongabayRSS');
const frontiersRSS = require('../data/frontiersRSS');
const plosRSS = require('../data/plosRSS');
const convRSS = require('../data/convRSS');
const scidailyRSS = require('../data/scidailyRSS');
const consRSS = require('../data/consRSS');
const dteRSS = require('../data/dteRSS');
const fetchArticles = require('../data/getArticles');

newsRouter.get('/articles', async (req, res, next) => {
    try {
        const articles = await fetchArticles();
        if (articles && articles.length) {
            res.status(200).json({ articles });
        } else {
            res.status(404).json({ message: 'No articles found.' });
        }
    } catch (err) {
        return next(err);
    }
});

// Below routes are for testing, not used by front end. 

newsRouter.get('/mongabay', async (req, res, next) => {
    try {
        const articles = await mongaRSS();
        if (articles) {
            res.status(200).json({ articles });
        }
    } catch (err) {
        return next(err);
    }
});

newsRouter.get('/scidaily', async (req, res, next) => {
    try {
        const articles = await scidailyRSS();
        if (articles) {
            res.status(200).json({ articles });
        }
    } catch (err) {
        return next(err);
    }
});

newsRouter.get('/frontiers', async (req, res, next) => {
    try {
        const articles = await frontiersRSS();
        if (articles) {
            res.status(200).json({ articles });
        }
    } catch (err) {
        return next(err);
    }
});

newsRouter.get('/plos', async (req, res, next) => {
    try {
        const articles = await plosRSS();
        if (articles) {
            res.status(200).json({ articles });
        }
    } catch (err) {
        return next(err);
    }
});

newsRouter.get('/conversation', async (req, res, next) => {
    try {
        const articles = await convRSS();
        if (articles) {
            res.status(200).json({ articles });
        }
    } catch (err) {
        return next(err);
    }
});

newsRouter.get('/conservation', async (req, res, next) => {
    try {
        const articles = await consRSS();
        if (articles) {
            res.status(200).json({ articles });
        }
    } catch (err) {
        return next(err);
    }
});

newsRouter.get('/downtoearth', async (req, res, next) => {
    try {
        const articles = await dteRSS();
        if (articles) {
            res.status(200).json({ articles });
        }
    } catch (err) {
        return next(err);
    }
});

module.exports = newsRouter;