import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { 
    selectCurrentUser, 
    selectLoading, 
    selectError 
} from '../features/users/userSlice';
import { Container, Row, Button } from 'reactstrap';
import Header from '../components/Header';
import ReadingList from '../features/users/ReadingList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ReadingListPage = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isLoading = useSelector(selectLoading);
    const errMsg = useSelector(selectError);

    return (
        <Container fluid>
            <Row className='header-row bg-dark mb-5'>
                <Header />
            </Row>
            <h1 className='pf fw-bold text-center'>Your Reading List</h1>
            {currentUser ? (
                <ReadingList currentUser={currentUser} />
            ) : !currentUser ? (
                <div className='text-center mt-5'>
                    <p>Please log in to view your reading list.</p>
                    <Button color='success' className='rounded-0 mb-3 me-auto'>
                        <NavLink className='nav-link' to='/'>
                            <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                        </NavLink>
                    </Button>
                </div>
            ) : isLoading ? (
                <div className='text-center mt-5'>
                    <p>Getting your reading list...</p>
                </div>
            ) : errMsg ? (
                <div className='text-center mt-5'>
                    <p>ERROR: {errMsg}</p>
                    <Button color='success' className='rounded-0 mb-3 me-auto'>
                        <NavLink className='nav-link' to='/'>
                            <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                        </NavLink>
                    </Button>
                </div>
            ) : 
                <div className='text-center mt-5'>
                    <p>An unspecified error occurred.  Please try again later.</p>
                    <Button color='success' className='rounded-0 mb-3 me-auto'>
                        <NavLink className='nav-link' to='/'>
                            <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                        </NavLink>
                    </Button>
                </div>
            }
        </Container>
    );
};

export default ReadingListPage;