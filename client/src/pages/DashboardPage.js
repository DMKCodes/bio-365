import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/users/userSlice';
import { Container, Row, Col } from 'reactstrap';
import UserPanel from '../features/users/UserPanel';


const DashboardPage = () => {
    const currentUser = useSelector(selectCurrentUser);

    return (
        <Container className='mt-3 text-center'>
            {currentUser ? (
                <Row className='d-flex justify-content-center mb-5'>
                    <Col xs='10' md='8' className='pt-3'>
                        <UserPanel />
                    </Col>
                </Row>
            ) : <p>You are not logged in.</p>
            }
        </Container>
    );
};

export default DashboardPage;