import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/users/userSlice';
import { useGetArticlesQuery } from '../features/users/articlesApiSlice';
import { Container, Row, Col } from 'reactstrap';
import UserPanel from '../features/users/UserPanel';
import NewsList from '../features/news/NewsList';

const DashboardPage = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { _id } = currentUser;

    const {
        data,
        isError,
        error,
        isLoading
    } = useGetArticlesQuery(_id);

    return (
        <Container className='mt-3 text-center'>
            {currentUser ? (
                <>
                    <Row className='d-flex justify-content-center mb-5'>
                        <Col xs='10' md='8' className='pt-3'>
                            <UserPanel />
                        </Col>
                    </Row>
                    <Row>
                        <h4 className='mb-5'>Your Reading List</h4>
                        {isError ? (
                            error.status === 404 ? (
                                <p>{error.data.error}</p>
                            ) : (
                                <p>Error retrieving articles. Please refresh and try again.</p>
                            )
                        ) : isLoading ? (
                            <p>Fetching the latest articles...</p>
                        ) : data ? (
                            <NewsList 
                                articles={data.articles}
                                dashboard={true} 
                            />
                        ) : null}
                    </Row>
                </>
                ) : <p>You are not logged in.</p>
            }
        </Container>
    );
};

export default DashboardPage;