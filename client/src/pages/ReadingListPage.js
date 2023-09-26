import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/users/userSlice';
import { useGetArticlesQuery } from '../features/users/articlesApiSlice';
import NewsList from '../features/news/NewsList';
import { Container } from 'reactstrap';

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
        <Container>
            <h2 className='text-center'>Your Reading List</h2>
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
        </Container>
    );

};

export default ReadingListPage;