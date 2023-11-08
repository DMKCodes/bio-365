const Parser = require('rss-parser');
const parser = new Parser();

const url = 'https://www.frontiersin.org/journals/conservation-science/rss';

const fetchFrontierArticles = async () => {
    try {
        const feed = await parser.parseURL(url);

        const abbrArticles = feed.items.map((item) => {
            const abbrArticle = {
                title: item.title,
                link: item.link,
                pubDate: feed.pubDate,
                author: item.author,
                snippet: item.contentSnippet,
                category: 'Research',
                publisher: 'Frontiers',
                source: 'https://www.frontiersin.org/journals/conservation-science'
            };

            return abbrArticle;
        });

        return abbrArticles;
    } catch (error) {
        console.log('Error fetching Frontiers RSS feed:', error);
        return [];
    }
};

module.exports = fetchFrontierArticles;