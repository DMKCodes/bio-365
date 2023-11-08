const Parser = require('rss-parser');
const parser = new Parser();

const url = 'https://theconversation.com/global/topics/biodiversity-486/articles.atom';

const getImage = (content) => {
    const regex = /<img[^>]*src="([^"]*\.jpg)/;
    const match = content.match(regex);

    return match ? match[1] : null;
};

const fetchConvArticles = async () => {
    try {
        const feed = await parser.parseURL(url);

        const abbrArticles = feed.items.map((item) => {
            const abbrArticle = {
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                author: item.author,
                snippet: item.summary,
                category: 'News',
                publisher: 'The Conversation',
                source: 'https://theconversation.com/global/topics/biodiversity-486',
                image: getImage(item.content)
            };

            return abbrArticle;
        });

        return abbrArticles;
    } catch (error) {
        console.log('Error fetching Conversation RSS feed:', error);
        return [];
    }
};

module.exports = fetchConvArticles;