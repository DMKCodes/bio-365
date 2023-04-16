import { useSelector } from 'react-redux';
import { checkAdmin, selectCurrentUser } from '../features/users/userSlice';
import { useGetArticlesQuery } from '../features/users/articlesApiSlice';
import { Container, Row, Col } from 'reactstrap';
import UserPanel from '../components/users/UserPanel';
import AdminPanel from '../components/users/AdminPanel';
import NewsList from '../components/news/NewsList';

const DashboardPage = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isAdmin = useSelector(checkAdmin);
    const { username, _id } = currentUser;

    const {
        data,
        isError,
        isLoading
    } = useGetArticlesQuery(_id);

    return (
        <Container className='mt-3 text-center'>
            <Row className='pt-1'>
                <h2>Welcome, {username}!</h2>
            </Row>
            <Row className='d-flex justify-content-center mb-5'>
                <Col xs='10' md='8' className='pt-3'>
                    <UserPanel />
                </Col>
            </Row>
            {isAdmin &&
                <Row className='d-flex justify-content-center'>
                    <Col xs='10' md='8' className='pt-3'>
                        <AdminPanel />
                    </Col>
                </Row>
            }
            <Row>
                <h4 className='mb-5'>Your Reading List</h4>
                {isError ? (
                    <p>Error retrieving articles. Please refresh and try again.</p>
                ) : isLoading ? (
                    <p>Fetching the latest articles...</p>
                ) : data ? (
                    <NewsList 
                        articles={data.articles}
                        dashboard={true} 
                    />
                ) : null}
            </Row>
        </Container>
    );
};

export default DashboardPage;