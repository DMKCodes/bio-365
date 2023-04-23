import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectCurrentUser,
    checkSavedArticles,
    addSavedArticle,
    removeSavedArticle
} from '../../features/users/userSlice';
import { 
    useAddArticleMutation,
    useDeleteArticleMutation
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

const ArticleCard = ({ article, dashboard }) => {
    const dispatch = useDispatch();

    const currentUser = useSelector(selectCurrentUser);
    const { _id } = currentUser;

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

    const [isSaved, setIsSaved] = useState(false);
    
    const savedCheck = useSelector((state) => checkSavedArticles(state, title));
    
    useEffect(() => {
        setIsSaved(savedCheck);
    }, [savedCheck]);

    const [image, setImage] = useState(null);

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
    const [deleteArticle] = useDeleteArticleMutation();

    const addArticle = async () => {
        try {
            await postArticle({ _id, article }).unwrap();
            dispatch(addSavedArticle(article));
            setIsSaved(true);
        } catch (error) {
            console.log(error);
        }
    };

    const delArticle = async () => {
        try {
            const articleId = article._id;
            await deleteArticle({ _id, articleId }).unwrap();
            dispatch(removeSavedArticle(title));
            setIsSaved(false);
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
                <CardSubtitle>
                    <small className='text-muted'>
                        Author: {author}, {pubDate}
                    </small><br/>
                </CardSubtitle>
                <CardTitle tag='h5' className='article-title fw-bold px-1'>
                    {title}
                </CardTitle>
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
                {(currentUser && dashboard) || isSaved ? (
                    <Button
                        outline
                        type='button' 
                        color='danger'
                        size='sm'
                        tag='a'
                        onClick={() => delArticle()}
                    >
                        Remove Bookmark
                    </Button>
                ) : currentUser && !dashboard ? (
                    <Button
                        outline
                        type='button' 
                        color='secondary'
                        size='sm'
                        tag='a'
                        onClick={() => addArticle()}
                    >
                        Add Bookmark
                    </Button>
                ) : null }
                <Row className='mt-3'>
                    <Col xs='3'>
                        <CardText>
                            <small className='text-success fw-bold float-start ms-2'>
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