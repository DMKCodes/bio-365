import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { 
    selectCurrentUser, 
    selectLoading, 
    selectError 
} from '../features/users/userSlice';
import { Container, Row, Col, Button } from 'reactstrap';
import UserPanel from '../features/users/UserPanel';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isLoading = useSelector(selectLoading);
    const errMsg = useSelector(selectError);

    return (
        <Container fluid className='text-center'>
            <Row className='header-row bg-dark mb-5'>
                <Header />
            </Row>
            <Row className='d-flex justify-content-center mb-5'>
                <h1 className='pf fw-bold mb-5'>User Dashboard</h1>
                {currentUser ? (
                    <Col xs='12' md='8'>
                        <UserPanel currentUser={currentUser} />
                    </Col>
                ) : isLoading ? (
                    <div>
                        <p>Loading...</p>
                    </div>
                ) : errMsg ? (
                    <div>
                        <p>ERROR: {errMsg}</p>
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
            <Row className='d-flex justify-content-center'>
                <Col xs='10' md='6'>
                    <small>
                        <b>Note:</b> Biodiversity365 collects and stores only the information needed to maintain your account. I <i>do not</i> and <i>will never</i> traffic in the sale of user data to third parties, nor do I track any user behavior. I rely on direct feedback to gauge interest in various features, so please be sure to let me know your thoughts via the feedback form below!
                    </small>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardPage;