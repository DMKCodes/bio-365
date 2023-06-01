import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
    selectCurrentUser,
    checkSavedArticles,
    addSavedArticle,
    removeSavedArticle
} from '../users/userSlice';
import {
    useAddArticleMutation,
    useDeleteArticleMutation
} from '../users/articlesApiSlice';
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

    const checkSaved = useSelector((state) => checkSavedArticles(state, title));

    useEffect(() => {
        setIsSaved(checkSaved);
    }, [checkSaved]);

    const [expanded, setExpanded] = useState(false);

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
    }, [article]);

    const [postArticle] = useAddArticleMutation();
    const [deleteArticle] = useDeleteArticleMutation();

    const addArticle = async () => {
        const { _id } = currentUser;

        try {
            await postArticle({ _id, article }).unwrap();
            dispatch(addSavedArticle(article));
        } catch (error) {
            console.log(error);
        }
    };

    const delArticle = async () => {
        const { _id } = currentUser;

        try {
            const articleId = article._id;
            await deleteArticle({ _id, articleId }).unwrap();

            dispatch(removeSavedArticle(title));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Card className='article-card mb-4'>
            <CardImg
                alt='Article Image'
                className='article-image'
                src={image}
            />
            <CardBody>
                <CardSubtitle>
                    <small className='text-muted'>
                        Author: {author}, {pubDate}
                    </small><br />
                </CardSubtitle>
                <CardTitle tag='h5' className='article-title fw-bold px-1'>
                    {title}
                </CardTitle>
                <Button
                    type='link'
                    color='success'
                    className='me-2 rounded-0 btn-sm'
                    href={link}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    Full Article
                </Button>
                <Button
                    type='button'
                    color='dark'
                    className='me-2 rounded-0 btn-sm'
                    onClick={() => setExpanded(!expanded)}
                >
                    Preview [{!expanded ? '+' : '-'}]
                </Button>

                {currentUser && isSaved && dashboard ? (
                    <Button
                        type='button'
                        color='danger'
                        className='rounded-0 btn-sm'
                        onClick={() => {
                            delArticle();
                            setIsSaved(false);
                        }}
                    >
                        Remove Bookmark
                    </Button>
                ) : currentUser && isSaved && !dashboard ? (
                    <NavLink
                        className='nav-link d-inline-block'
                        to='/dashboard'
                    >
                        <Button
                            type='link'
                            color='dark'
                            className='rounded-0 btn-sm'
                        >
                            Dashboard
                        </Button>
                    </NavLink>
                ) : currentUser && !isSaved ? (
                    <Button
                        type='button'
                        color='secondary'
                        className='rounded-0 btn-sm'
                        onClick={() => {
                            addArticle();
                            setIsSaved(true);
                        }}
                    >
                        Add Bookmark
                    </Button>
                ) : null}

                <CardText className='mt-3'>
                    {(expanded && snippet.length > 0) &&
                        snippet
                    }
                </CardText>
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