import { useSelector } from 'react-redux';
import { checkAdmin, selectCurrentUser } from '../features/users/userSlice';
import { Container, Row, Col } from 'reactstrap';
import AdminPanel from '../components/users/AdminPanel';

const AdminPage = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isAdmin = useSelector(checkAdmin);
    const { username } = currentUser;

    return (
        <Container className='text-center'>
            <Row className='pt-1'>
                <h2>Welcome, {username}!</h2>
            </Row>
            { isAdmin ? (
                <Row className='d-flex justify-content-center'>
                    <Col xs='10' md='8' className='pt-3'>
                        <AdminPanel />
                    </Col>
                </Row>
            ) : (
                <p className='text-center'></p>
            )}
        </Container>
    );
};

export default AdminPage;