const Parser = require('rss-parser');
const parser = new Parser();

const url = 'https://news.mongabay.com/feed/?post_type=post&feedtype=bulletpoints&list=biodiversity';

const fetchMongabayArticles = async () => {
    try {
        const feed = await parser.parseURL(url);

        const abbrArticles = feed.items.map((item) => {
            const abbrArticle = {
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                author: item.creator,
                image: item.enclosure.url,
                snippet: item.contentSnippet,
                category: 'News',
                publisher: 'Mongabay',
                source: 'https://www.mongabay.com/'
            };

            return abbrArticle;
        });

        return abbrArticles;
    } catch (error) {
        console.log('Error fetching Mongabay RSS feed:', error);
        return [];
    }
};

module.exports = fetchMongabayArticles;