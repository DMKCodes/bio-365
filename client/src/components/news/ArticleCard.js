import { useState, useEffect } from 'react';
import {
    Row,
    Col,
    Button, 
    Card, 
    CardImg,
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText 
} from 'reactstrap';
import Frontiers from '../../app/media/frontiers.png';
import Plos from '../../app/media/plos.png';
import SciDaily from '../../app/media/sciencedaily.jpg';
import Conservation from '../../app/media/conservation.jpg';
import DTE from '../../app/media/dte.png';

const ArticleCard = ({ article }) => {
    const [image, setImage] = useState(null);
    const { 
        title, 
        link, 
        pubDate, 
        author, 
        snippet, 
        publisher,
        source,
        category
    } = article;

    useEffect(() => {
        if (article.image) {
            setImage(article.image);
        } else if (article.publisher === 'Frontiers in Conservation Science') {
            setImage(Frontiers);
        } else if (article.publisher === 'PLOS ONE Biodiversity') {
            setImage(Plos);
        } else if (article.publisher === 'ScienceDaily') {
            setImage(SciDaily);
        } else if (article.publisher === 'Conservation International') {
            setImage(Conservation);
        } else if (article.publisher === 'Down To Earth') {
            setImage(DTE);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Card className='mb-4'>
            <CardImg
                alt='card image'
                className='article-image'
                src={image}
            />
            <CardBody>
                <CardTitle tag='h5' className='article-title px-1'>
                    <b>{title}</b>
                </CardTitle>
                <CardSubtitle>
                    <small className='text-muted'>
                        Author: {author}, {pubDate}
                    </small><br/>
                </CardSubtitle>
                <CardText className='article-blurb px-1'>
                    {snippet}
                </CardText>
                <Button
                    outline
                    type='button' 
                    color='dark'
                    size='sm'
                    className='me-2'
                    href={link}  
                    tag='a' 
                >
                    Read Article
                </Button>
                <Button
                    outline
                    type='button' 
                    color='secondary'
                    size='sm'
                    href={link}  
                    tag='a' 
                >
                    Save For Later
                </Button>
                <Row className='mt-3'>
                    <Col xs='3'>
                        <CardText>
                            <small className='text-muted float-start ms-2'>
                                {category}
                            </small>
                        </CardText>
                    </Col>
                    <Col xs='9'>
                        <CardText>
                            <small className='text-muted float-end me-2'>
                                Source: <a href={source}>{publisher}</a>
                            </small>
                        </CardText>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default ArticleCard;