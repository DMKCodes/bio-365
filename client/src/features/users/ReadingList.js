import { NavLink } from 'react-router-dom';
import { useGetArticlesQuery } from '../../features/users/articlesApiSlice';
import { Container, Row, Button } from 'reactstrap';
import ArticleList from '../articles/ArticleList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ReadingList = ({ currentUser }) => {
    const { _id } = currentUser;

    const {
        data,
        isError,
        error,
        isLoading
    } = useGetArticlesQuery(_id);

    return (
        <Container>
            <Row>
                {isLoading ? (
                    <div>
                        <p>Getting your reading list...</p>
                    </div>
                ) : isError ? (
                    <div>
                        <p>ERROR: {error}</p>
                        <Button color='success' className='rounded-0 mb-3 me-auto'>
                            <NavLink className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                            </NavLink>
                        </Button>
                    </div>
                ) : data ? (
                    <ArticleList articles={data.articles} dashboard={true} />
                ) : 
                    <div>
                        <p>An unspecified error occurred.  Please try again later.</p>
                        <Button color='success' className='rounded-0 mb-3 me-auto'>
                            <NavLink className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                            </NavLink>
                        </Button>
                    </div>
                }
            </Row>
        </Container>
    )
};

export default ReadingList;