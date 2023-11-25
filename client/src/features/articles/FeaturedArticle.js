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
import getArticleImg from '../../utils/getArticleImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkEmpty }  from '@fortawesome/free-regular-svg-icons';

const FeaturedArticle = ({ article }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const [image, setImage] = useState(null);

    const {
        title,
        link,
        pubDate,
        author,
        snippet,
        publisher,
        category
    } = article;

    const [isSaved, setIsSaved] = useState(false);
    const checkSaved = useSelector((state) => checkSavedArticles(state, title));

    useEffect(() => {
        setIsSaved(checkSaved);
    }, [checkSaved]);

    useEffect(() => {
        const articleImg = getArticleImg(article);
        setImage(articleImg);
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
            await deleteArticle({ _id, article }).unwrap();
            dispatch(removeSavedArticle(title));
            setIsSaved(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Row className='featured-article m-0 mt-0 mt-md-5 mb-5 p-0 border'>
            <Col xl='6' className='p-0'>
                <img src={image} alt='' className='featured-article-image w-100' />
            </Col>
            <Col xl='6' className='featured-article-content position-relative p-1 p-xl-3'>
                <div className='w-100 px-2 mt-2 d-flex justify-content-between'>
                    <small className='text-success fw-bold'>{category}</small>
                    {currentUser && isSaved ? (
                        <FontAwesomeIcon 
                            icon={faBookmark}
                            className='article-card-bookmark text-success my-auto' 
                            size='lg'
                            onClick={() => {
                                delArticle();
                            }}
                        />
                    ) : currentUser && !isSaved ? (
                        <FontAwesomeIcon 
                            icon={faBookmarkEmpty}
                            className='article-card-bookmark float-end my-auto' 
                            size='lg'
                            onClick={() => {
                                addArticle();
                            }}
                        />
                    ) : null}
                </div>

                <div className='mt-0 mt-xl-4 px-2'>
                    <h4 title={title} className='featured-article-title pf fw-bold mt-2 mb-1'>{title}</h4>
                    <small className='text-muted'>{author}, {publisher}, {pubDate}</small>
                    {snippet ? (
                        <p title={snippet} className='featured-article-snippet mt-2'>
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