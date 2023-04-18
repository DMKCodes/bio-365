import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/users/userSlice';
import { Row, Col, Button } from 'reactstrap';
import { 
    useAddArticleMutation,
    useDeleteArticleMutation
} from '../../features/users/articlesApiSlice';
import Frontiers from '../../app/media/frontiers.png';
import Plos from '../../app/media/plos.png';
import SciDaily from '../../app/media/sciencedaily.jpg';
import Conservation from '../../app/media/conservation.jpg';
import DTE from '../../app/media/dte.png';

const FeaturedArticle = ({ article, dashboard }) => {
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
        } catch (error) {
            console.log(error);
        }
    };

    const delArticle = async () => {
        try {
            const articleId = article._id;
            await deleteArticle({ _id, articleId }).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Row className='py-3 mb-3 align-items-center'>
            <Col md='6'>
                <img src={image} alt='' className='w-100' />
            </Col>
            <Col md='6'>
                <Row>
                    <h5 className='article-title fw-bold text-center'>
                        {title}
                    </h5>
                </Row>
                <Row>
                    <small className='text-muted text-center'>
                        Author: {author}, {pubDate}
                    </small>
                </Row>
                <Row>
                    <p className='article-blurb text-center'>{snippet}</p>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center'>
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
                        {currentUser && dashboard ? (
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
                    </Col>
                </Row>
                <Row className='mt-3'>
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