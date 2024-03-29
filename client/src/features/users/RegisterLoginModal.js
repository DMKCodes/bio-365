import { useState } from 'react';
import {
    Button,
    Modal,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from 'reactstrap';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const RegisterLoginModal = ({ currentUser }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    return (
        <div>       
            <Button 
                outline
                color='light'
                className='rounded-0 ms-auto me-0 ms-md-3 my-3 my-sm-0' 
                onClick={() => setModalOpen(true)}
            >
                Log in
            </Button>
            <Modal isOpen={modalOpen} className='modal-dialog-centered'>
                <Nav tabs justified>
                    <NavItem>
                        <NavLink
                            className={activeTab === 'login' ? 'active rounded-0' : 'rounded-0'}
                            onClick={() => setActiveTab('login')}
                            style={{ cursor: 'pointer' }}
                        >
                            Log In
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={activeTab === 'register' ? 'active rounded-0' : 'rounded-0'}
                            onClick={() => setActiveTab('register')}
                            style={{ cursor: 'pointer' }}
                        >
                            Register
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId='register'>
                        { error ? (
                            <h4 className='p-3'>{errorMsg}</h4>
                        ) : currentUser ? (
                            <h4 className='p-3'>Registration successful! Logging in...</h4>
                        ) : (
                            <RegisterForm
                                setModalOpen={setModalOpen}
                                setError={setError}
                                setErrorMsg={setErrorMsg}
                                setActiveTab={setActiveTab}
                            />
                        )}
                    </TabPane>
                    <TabPane tabId='login'>
                        { error ? (
                            <h4 className='p-3'>{errorMsg}</h4>
                        ) : currentUser ? (
                            <h4 className='m-3'>Login successful. Redirecting...</h4>
                        ) : (
                            <LoginForm
                                setModalOpen={setModalOpen}
                                setError={setError}
                                setErrorMsg={setErrorMsg}
                            />
                        )}
                    </TabPane>
                </TabContent>
            </Modal>
        </div>
    );
};

export default RegisterLoginModal;