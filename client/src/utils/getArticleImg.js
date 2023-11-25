import Frontiers from '../app/media/frontiers.png';
import Plos from '../app/media/plos.png';
import SciDaily from '../app/media/sciencedaily.jpg';
import Conservation from '../app/media/conservation.jpg';
import DTE from '../app/media/dte.png';

const getArticleImg = (article) => {
    let articleImg;

    if (article.image) {
        articleImg = article.image;
    } else if (article.publisher === 'Frontiers') {
        articleImg = Frontiers;
    } else if (article.publisher === 'PLOS ONE Biodiversity') {
        articleImg = Plos;
    } else if (article.publisher === 'ScienceDaily') {
        articleImg = SciDaily;
    } else if (article.publisher === 'Conservation International') {
        articleImg = Conservation;
    } else if (article.publisher === 'Down To Earth') {
        articleImg = DTE;
    }

    return articleImg;
};

export default getArticleImg;