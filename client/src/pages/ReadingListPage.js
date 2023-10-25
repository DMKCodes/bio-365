import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/users/userSlice';
import { useGetArticlesQuery } from '../features/users/articlesApiSlice';
import { Container, Row } from 'reactstrap';
import NewsList from '../features/articles/ArticleList';
import Header from '../components/Header';

const ReadingListPage = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { _id } = currentUser;

    const {
        data,
        isError,
        error,
        isLoading
    } = useGetArticlesQuery(_id);

    return (
        <Container fluid>
            <Row className='header-row bg-dark mb-5'>
                <Header />
            </Row>
            <h1 className='pf fw-bold text-center'>Your Reading List</h1>
            {!currentUser ? (
                <p className='text-center mt-5'>You are not logged in.</p>
            ) : isError ? (
                error.status === 404 ? (
                    <p className='text-center mt-5'>{error.data.error}</p>
                ) : (
                    <p className='text-center mt-5'>Error retrieving articles. Please refresh and try again.</p>
                )
            ) : isLoading ? (
                <p className='text-center mt-5'>Fetching the latest articles...</p>
            ) : data ? (
                <NewsList
                    articles={data.articles}
                    dashboard={true}
                />
            ) : null}
        </Container>
    );

};

export default ReadingListPage;