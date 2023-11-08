import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { 
    selectCurrentUser,
    selectLoading, 
    selectError 
} from '../features/users/userSlice';
import { Container, Row, Col, Button } from 'reactstrap';
import AdminPanel from '../features/users/AdminPanel';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
    const currentUser = useSelector(selectCurrentUser);
    console.log(currentUser);
    const isLoading = useSelector(selectLoading);
    const errMsg = useSelector(selectError);

    return (
        <Container fluid className='text-center'>
            <Row className='header-row bg-dark mb-5'>
                <Header />
            </Row>
            <Row className='d-flex justify-content-center mb-5'>
                <h1 className='pf fw-bold mb-5'>Admin Dashboard</h1>
                {currentUser && currentUser.admin ? (
                    <Col xs='12' md='8'>
                        <AdminPanel />
                    </Col>
                ) : currentUser && !currentUser.admin ? (
                    <div>
                        <p>You are not authorized to view this page.</p>
                        <Button color='success' className='rounded-0 mb-3 me-auto'>
                            <NavLink className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                            </NavLink>
                        </Button>
                    </div>
                ) : isLoading ? (
                    <div>
                        <p className='text-center'>Loading...</p>
                    </div>
                ) : errMsg ? (
                    <div>
                        <p className='text-center'>ERROR: {errMsg}</p>
                        <Button color='success' className='rounded-0 mb-3 me-auto'>
                            <NavLink className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                            </NavLink>
                        </Button>
                    </div>
                ) : !currentUser ? (
                    <div>
                        <p>You are not logged in.</p>
                        <Button color='success' className='rounded-0 mb-3 me-auto'>
                            <NavLink className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                            </NavLink>
                        </Button>
                    </div>
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
    );
};

export default AdminPage;