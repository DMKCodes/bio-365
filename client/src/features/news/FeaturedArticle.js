import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import {
    selectCurrentUser,
    checkSavedArticles,
    addSavedArticle,
    removeSavedArticle
} from '../users/userSlice';
import {
    useAddArticleMutation,
    useDeleteArticleMutation,
} from '../users/articlesApiSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus, 
    faMinus, 
    faArrowUpRightFromSquare, 
    faBookmark, 
    faXmark 
} from '@fortawesome/free-solid-svg-icons';
import Frontiers from '../../app/media/frontiers.png';
import Plos from '../../app/media/plos.png';
import SciDaily from '../../app/media/sciencedaily.jpg';
import Conservation from '../../app/media/conservation.jpg';
import DTE from '../../app/media/dte.png';

const FeaturedArticle = ({ article, dashboard }) => {
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

    const [expanded, setExpanded] = useState(false);

    const [isSaved, setIsSaved] = useState(false);

    const checkSaved = useSelector((state) => checkSavedArticles(state, title));

    useEffect(() => {
        setIsSaved(checkSaved);
    }, [checkSaved]);

    const [image, setImage] = useState(null);

    useEffect(() => {
        if (article.image) {
            setImage(article.image);
        } else if (article.publisher === 'Frontiers') {
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
        <Row className='featured-article m-0 my-0 my-md-5 p-0 border'>
            <Col md='6' className='p-0'>
                <img src={image} alt='' className='featured-article-image w-100' />
            </Col>
            <Col md='6' className='p-5'>
                <div className='d-flex flex-column justify-content-center h-100'>
                    <Row>
                        <h5 className='fw-bold text-center'>
                            {title}
                        </h5>
                    </Row>

                    <Row>
                        <small className='text-muted text-center'>
                            Author: {author}, {pubDate}
                        </small>
                    </Row>

                    <Row className='featured-article-btns my-3 d-flex justify-content-center'>
                            <Button
                                type='link'
                                outline
                                color='dark'
                                className='rounded-0 btn-sm me-3'
                                href={link}
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                                <span className='me-2'>Read</span>
                                <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                            </Button>
                            <Button
                                type='button'
                                outline
                                color={expanded ? 'success' : 'dark'}
                                className='rounded-0 btn-sm me-3'
                                onClick={() => setExpanded(!expanded)}
                            >
                                <span className='me-2'>Peek</span>
                                <span>
                                    {!expanded ? 
                                        <FontAwesomeIcon icon={faPlus} /> : 
                                        <FontAwesomeIcon icon={faMinus} />
                                    }
                                </span>
                            </Button>
                            {currentUser && isSaved ? (
                                <Button
                                    type='button'
                                    color='danger'
                                    outline
                                    className='rounded-0 btn-sm mt-md-3 mt-lg-0'
                                    onClick={() => {
                                        delArticle();
                                        setIsSaved(false);
                                    }}
                                >
                                    <span className='me-2'>Unsave</span>
                                    <FontAwesomeIcon icon={faXmark} />
                                </Button>
                            ) : currentUser && !isSaved ? (
                                <Button
                                    type='button'
                                    outline
                                    color='dark'
                                    className='rounded-0 btn-sm mt-md-3 mt-lg-0'
                                    onClick={() => {
                                        addArticle();
                                        setIsSaved(true);
                                    }}
                                >
                                    <span className='me-2'>Save</span>
                                    <span>
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </span>
                                </Button>
                            ) : null}
                    </Row>

                    <Row className='featured-article-preview text-center'>
                        {(expanded && snippet.length > 0) &&
                            <p>{snippet}</p>
                        }
                    </Row>
                </div>

                <Row className='float-bottom'>
                    <Col xs='3'>
                        <p>
                            <small className='text-success fw-bold float-start ms-2'>
                                {category}
                            </small>
                        </p>
                    </Col>
                    <Col xs='9'>
                        <p>
                            <small className='text-muted float-end me-2'>
                                Source: <a href={source}>{publisher}</a>
                            </small>
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default FeaturedArticle;