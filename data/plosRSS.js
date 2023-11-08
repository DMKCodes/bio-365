const Parser = require('rss-parser');
const parser = new Parser();

const url = 'https://journals.plos.org/plosone/search/feed/atom?sortOrder=DATE_NEWEST_FIRST&filterJournals=PLoSONE&unformattedQuery=subject%3A%22biodiversity%22';

const fetchPlosArticles = async () => {
    try {
        const feed = await parser.parseURL(url);

        const abbrArticles = feed.items.map((item) => {
            const abbrArticle = {
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                author: item.author,
                snippet: item.contentSnippet,
                category: 'Research',
                publisher: 'PLOS ONE Biodiversity',
                source: 'https://journals.plos.org/plosone/browse/biodiversity',
            };

            return abbrArticle;
        });

        return abbrArticles;
    } catch (error) {
        console.log('Error fetching PLOS RSS feed:', error);
        return [];
    }
};

module.exports = fetchPlosArticles;