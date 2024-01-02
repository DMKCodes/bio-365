import { useTheme } from '../../hooks/ThemeProvider';
import { Container, Row } from 'reactstrap';
import UserList from './UserList';

const AdminPanel = () => {
    const { mode } = useTheme();

    return (
        <Container className={`bs-card mb-5 ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
            <Row className='border'>
                <h4 className='pf fw-bold my-3'>Admin Panel</h4>
                <p>Use this panel to view and modify user accounts.</p>
            </Row>
            <Row>
                <UserList />
            </Row>
        </Container>
    );
};

export default AdminPanel;