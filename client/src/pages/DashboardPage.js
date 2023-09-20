import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/users/userSlice';
import { Container, Row, Col } from 'reactstrap';
import UserPanel from '../features/users/UserPanel';
import Header from '../components/Header';

const DashboardPage = () => {
    const currentUser = useSelector(selectCurrentUser);

    return (
        <Container fluid className='text-center'>
            <Row className='header-row bg-dark mb-5'>
                <Header />
            </Row>
            {currentUser ? (
                <Row className='d-flex justify-content-center mb-5'>
                    <h1 className='mb-5'>User Dashboard</h1>
                    <Col xs='10' md='8'>
                        <UserPanel />
                    </Col>
                </Row>
            ) : <p>You are not logged in.</p>}
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