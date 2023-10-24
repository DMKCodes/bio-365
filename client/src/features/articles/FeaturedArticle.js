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
    faArrowUpRightFromSquare, 
    faBookmark
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkEmpty }  from '@fortawesome/free-regular-svg-icons';
import Frontiers from '../../app/media/frontiers.png';
import Plos from '../../app/media/plos.png';
import SciDaily from '../../app/media/sciencedaily.jpg';
import Conservation from '../../app/media/conservation.jpg';
import DTE from '../../app/media/dte.png';

const FeaturedArticle = ({ article }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    const {
        title,
        link,
        pubDate,
        author,
        snippet
    } = article;

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
            if (article._id) {
                const articleId = article._id;
                await deleteArticle({ _id, articleId }).unwrap();
            }
            dispatch(removeSavedArticle(title));
            setIsSaved(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Row className='featured-article position-relative m-0 mt-0 mt-md-5 mb-5 p-0 border'>
            <Col xl='6' className='p-0'>
                <img src={image} alt='' className='featured-article-image w-100' />
            </Col>
            <Col xl='6' className='featured-article-content position-relative p-1 p-xl-3'>
                {currentUser && isSaved ? (
                    <FontAwesomeIcon 
                        icon={faBookmark}
                        className='article-card-bookmark text-success' 
                        size='lg'
                        onClick={() => {
                            delArticle();
                        }}
                    />
                ) : currentUser && !isSaved ? (
                    <FontAwesomeIcon 
                        icon={faBookmarkEmpty}
                        className='article-card-bookmark' 
                        size='lg'
                        onClick={() => {
                            addArticle();
                        }}
                    />
                ) : null}

                <div className='mt-0 mt-xl-4 ps-2 pe-4 pe-xl-2'>
                    <h4 className='featured-article-title pf fw-bold my-1'>{title}</h4>
                    <small className='text-muted'>{author}, {pubDate}</small>
                    {snippet ? (
                        <p className='featured-article-snippet mt-2'>
                            <b>Preview: </b>{snippet}
                        </p>
                    ) : (
                        <p className='featured-article-snippet mt-2'>
                            <i>No Preview Available</i>
                        </p>
                    )}

                </div>

                <Button
                    type='link'
                    color='success'
                    className='featured-article-external-btn rounded-0 d-flex align-items-center justify-content-center'
                    href={link}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    Full Article
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm' className='ms-2' />
                </Button>
            </Col>
        </Row>
    );
};

export default FeaturedArticle;