const Parser = require('rss-parser');
const parser = new Parser();

const url = 'https://www.downtoearth.org.in/rss/wildlife-biodiversity';

const getImage = (content) => {
    const regex = /<img[^>]*src="([^"]*\.jpg)/;
    const match = content.match(regex);

    return match ? match[1] : null;
};

const getAuthor = (name) => {
    if (name === undefined) {
        return 'DTE Staff';
    } else {
        return name;
    }
};

const dteArticles = async () => {
    try {
        const feed = await parser.parseURL(url);

        const abbrArticles = feed.items.map((item) => {
            const abbrArticle = {
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                author: getAuthor(item.creator),
                snippet: item.contentSnippet,
                category: 'News',
                publisher: 'Down To Earth',
                source: 'https://www.downtoearth.org.in/',
                image: getImage(item['content:encoded'])
            };

            return abbrArticle;
        });

        return abbrArticles;
    } catch (error) {
        console.log('Error fetching articles from DTH', error);
        return [];
    }
};

module.exports = dteArticles;