const mongaRSS = require('./mongabayRSS');
const frontiersRSS = require('./frontiersRSS');
const plosRSS = require('./plosRSS');
const convRSS = require('./convRSS');
const scidailyRSS = require('./scidailyRSS');
const consRSS = require('./consRSS');
const dteRSS = require('./dteRSS');

const funcList = [
    mongaRSS, 
    frontiersRSS, 
    plosRSS, 
    convRSS, 
    scidailyRSS, 
    consRSS,
    dteRSS
];

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
    const year = date.getFullYear().toString();
    return `${day} ${month} ${year}`;
};

const shuffleArticles = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    
    return arr;
};

const sortByDate = (arr, date) => {
    arr.sort((a, b) => new Date(b[date]) - new Date(a[date]));
    return arr;
};

const truncateAuthorName = (name) => {
        const authorArr = name.split(',');
        return authorArr[0];
};

const replaceSpecialChars = (content) => {
    return content.replace(/&nbsp;|&rsquo;|&lsquo;/g, (match) => {
        switch (match) {
            case '&nbsp;':
                return ' ';
            case '&rsquo;':
                return "'";
            case '&lsquo;':
                return "'";
            default:
                return match;
        }
    });
};

const fetchArticles = async () => {
    const allArticles = [];

    for (const func of funcList) {
        try {
            const articles = await func();

            if (!articles) {
                console.log(`Error: No articles fetched from ${func.name}.`);
                return;
            }

            articles.map((article) => {
                const formatted = formatDate(article.pubDate);
                article.pubDate = formatted;

                const truncated = truncateAuthorName(article.author);
                article.author = truncated;

                const replacedTitle = replaceSpecialChars(article.title);
                article.title = replacedTitle;

                const replacedContent = replaceSpecialChars(article.snippet);
                article.snippet = replacedContent;
                
                return article;
            });

            allArticles.push(...articles);
            
        } catch (err) {
            console.log('Error fetching articles from', func, err);
            return;
        }
    };

    const shuffledArticles = shuffleArticles(allArticles);
    const sortedArticles = sortByDate(shuffledArticles, 'pubDate');

    return sortedArticles;
};

module.exports = fetchArticles;