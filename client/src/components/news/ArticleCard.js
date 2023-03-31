import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/users/userSlice';
import { 
    useAddArticleMutation
} from '../../features/users/articlesApiSlice';
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
    const [userId, setUserId] = useState(null);
    const currentUser = useSelector(selectCurrentUser);

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
        if (currentUser) {
            setUserId(currentUser._id);
        }
    }, [currentUser]);

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

    const [postArticle] = useAddArticleMutation();

    const addArticle = async () => {
        try {
            await postArticle({ userId, article }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Card className='article-card mb-4'>
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
                    Full Article
                </Button>
                {currentUser &&
                    <Button
                        outline
                        type='button' 
                        color='secondary'
                        size='sm'
                        tag='a'
                        onClick={() => addArticle()}
                    >
                        Save For Later
                    </Button>
                }
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