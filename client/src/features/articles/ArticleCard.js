import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter
} from 'reactstrap';
import getArticleImg from '../../utils/getArticleImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlus, 
    faMinus, 
    faArrowUpRightFromSquare, 
    faBookmark,
    faEyeSlash
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkEmpty }  from '@fortawesome/free-regular-svg-icons';

const ArticleCard = ({ article }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const [expanded, setExpanded] = useState(false);
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

    const [isSaved, setIsSaved] = useState(false);
    const checkSaved = useSelector((state) => checkSavedArticles(state, title));

    useEffect(() => {
        setIsSaved(checkSaved);
    }, [checkSaved]);

    // If article has no image, use placeholder image.
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
            setIsSaved(true);
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
        <Card className='article-card my-2 rounded-0'>
            <CardImg
                alt='Article Image'
                className='article-image rounded-0'
                src={image}
            />
            <CardBody className='position-relative pt-2 px-2'>
                {currentUser && isSaved ? (
                    <FontAwesomeIcon 
                        icon={faBookmark}
                        className='article-card-bookmark text-success float-end' 
                        size='lg'
                        onClick={() => {
                            delArticle();
                        }}
                    />
                ) : currentUser && !isSaved ? (
                    <FontAwesomeIcon 
                        icon={faBookmarkEmpty}
                        className='article-card-bookmark float-end' 
                        size='lg'
                        onClick={() => {
                            addArticle();
                        }}
                    />
                ) : null}
                
                <CardTitle 
                    title={title} 
                    tag='h5' 
                    className='article-title pf fw-bold px-3 mt-4 mb-1'
                >
                    {title}
                </CardTitle>

                <CardSubtitle className='mb-3'>
                    <small className='text-muted'>
                        {author}, {pubDate}
                    </small><br />
                </CardSubtitle>

                <Row>
                    <Button
                        type='button'
                        outline
                        color='dark'
                        className={snippet ? 
                            'article-preview-btn rounded-0 btn-sm mx-auto' : 
                            'disabled article-preview-btn rounded-0 btn-sm mx-auto'
                        }
                        onClick={() => setExpanded(!expanded)}
                    >
                        Preview
                        {!snippet ? (
                            <FontAwesomeIcon icon={faEyeSlash} className='ms-2' />
                        ) : !expanded ? (
                            <FontAwesomeIcon icon={faPlus} className='ms-2' />
                        ) : (
                            <FontAwesomeIcon icon={faMinus} className='ms-2' />
                        )}
                    </Button>
                </Row>
                
                <CardText className='mt-3 mb-4'>
                    {expanded && snippet &&
                        snippet
                    }
                </CardText>

                <div className='article-card-info'>
                    <small className='text-success fw-bold float-start'>
                        {category}
                    </small>
                    <small className='text-muted float-end'>
                        Source: <a href={source}>{publisher}</a>
                    </small>
                </div>
            </CardBody>
            <CardFooter className='nb-card-footer m-0 p-0'>
                <Button
                    color='success'
                    type='link'
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                    className='resource-card-button w-100 h-100 rounded-0'
                >
                    Full Article
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' className='ms-2' />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ArticleCard;