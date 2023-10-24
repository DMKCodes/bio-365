import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectCurrentUser } from '../features/users/userSlice';
import { Container, Row, Col, Button } from 'reactstrap';
import UserPanel from '../features/users/UserPanel';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
    const currentUser = useSelector(selectCurrentUser);

    return (
        <Container fluid className='text-center'>
            <Row className='header-row bg-dark mb-5'>
                <Header />
            </Row>
            <Row className='d-flex justify-content-center mb-5'>
                <h1 className='pf fw-bold mb-5'>User Dashboard</h1>
                {currentUser ? (
                    <Col xs='12' md='8'>
                        <UserPanel />
                    </Col>
                ) : (
                    <>
                        <p>You are not logged in.</p>
                        <Button color='success' className='rounded-0 mb-3 me-auto'>
                            <NavLink className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Support Biodiversity
                            </NavLink>
                        </Button>
                    </>
                )}
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs='10' md='6'>
                    <small>
                        <b>Note:</b> Biodiversity365 collects and stores only the information needed to maintain your account. We <i>do not</i> and <i>will never</i> traffic in the sale of user data to third parties, nor do we track any user behavior while engaging with this platform. We rely on direct user feedback to gauge interest in various features, so please be sure to let us know your thoughts via the feedback form below!
                    </small>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardPage;