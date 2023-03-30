const Parser = require('rss-parser');
const parser = new Parser();

const url = 'http://feeds.feedburner.com/ConservationInternationalBlog/Biodiversity';

const fetchConsArticles = async () => {
    try {
        const feed = await parser.parseURL(url);

        const abbrArticles = feed.items.map((item) => {
            const abbrArticle = {
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                author: 'Conservation International',
                snippet: item.contentSnippet,
                category: 'News',
                publisher: 'Conservation International',
                source: 'https://www.conservation.org/'
            };

            return abbrArticle;
        });

        return abbrArticles;
    } catch (error) {
        console.log('Error fetching Conservation RSS feed:', error);
    }
};

module.exports = fetchConsArticles;