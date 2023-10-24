import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { checkAdmin, selectCurrentUser } from '../features/users/userSlice';
import { Container, Row, Col, Button } from 'reactstrap';
import AdminPanel from '../features/users/AdminPanel';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isAdmin = useSelector(checkAdmin);

    return (
        <Container fluid className='text-center'>
            <Row className='header-row bg-dark mb-5'>
                <Header />
            </Row>
            <Row className='d-flex justify-content-center mb-5'>
                <h1 className='pf fw-bold mb-5'>Admin Dashboard</h1>
                {!currentUser ? (
                    <>
                        <p>You are not logged in.</p>
                        <Button color='success' className='rounded-0 mb-3 me-auto'>
                            <NavLink className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                            </NavLink>
                        </Button>
                    </>
                ) : currentUser && !isAdmin ? (
                    <>
                        <p className='text-center'>You are not authorized to view this page.</p>
                        <Button color='success' className='rounded-0 mb-3 me-auto'>
                            <NavLink className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                            </NavLink>
                        </Button>
                    </>
                ) : currentUser && isAdmin ? (
                    <Col xs='12' md='8'>
                        <AdminPanel />
                    </Col>
                ) : 
                    <>
                        <p className='text-center'>An error has occurred, please try again later.</p>
                        <Button color='success' className='rounded-0 mb-3 me-auto'>
                            <NavLink className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Return Home
                            </NavLink>
                        </Button>
                    </>
                }
            </Row>
        </Container>
    );
};

export default AdminPage;