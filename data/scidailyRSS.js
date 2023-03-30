const Parser = require('rss-parser');
const parser = new Parser();

const url = 'https://www.sciencedaily.com/rss/earth_climate/biodiversity.xml';

const fetchSciDailyArticles = async () => {
    try {
        const feed = await parser.parseURL(url);

        const abbrArticles = feed.items.map((item) => {
            const abbrArticle = {
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                author: 'ScienceDaily',
                snippet: item.contentSnippet,
                category: 'News',
                publisher: 'ScienceDaily',
                source: 'https://www.sciencedaily.com/news/earth_climate/biodiversity/'
            };

            return abbrArticle;
        });

        return abbrArticles;
    } catch (error) {
        console.log('Error fetching SciDaily RSS feed:', error);
    }
};

module.exports = fetchSciDailyArticles;