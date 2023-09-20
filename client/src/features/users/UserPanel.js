import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, clearCurrentUser } from '../../features/users/userSlice';
import { useNavigate } from 'react-router-dom';
import {
    usePutUserByIdMutation, 
    useDeleteUserByIdMutation 
} from '../../features/users/authApiSlice';
import { Container, Row, Col, Button } from 'reactstrap';
import UpdateAccountDropdown from './UpdateAccountDropdown';
import ChangeUsernameForm from './ChangeUsernameForm';
import ChangePasswordForm from './ChangePasswordForm';
import ChangeEmailForm from './ChangeEmailForm';

const UserPanel = () => {
    const [changeUsername, setChangeUsername] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);

    const [deleteAccount, setDeleteAccount] = useState(false);
    const [accountDeleted, setAccountDeleted] = useState(false);

    const [statusMsg, setStatusMsg] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector(selectCurrentUser);
    const { _id, username, email } = currentUser;

    const [putUserById] = usePutUserByIdMutation();
    const [deleteUserById] = useDeleteUserByIdMutation();

    const updateUserDetails = async (values) => {
        try {
            if (values.newUsername) {
                await putUserById({ _id, newVals: { username: values.newUsername } }).unwrap();
                setChangeUsername(false);
                setStatusMsg('Username successfully updated.');
            } else if (values.newPassword) {
                await putUserById({ _id, newVals: { password: values.newPassword } }).unwrap();
                setChangePassword(false);
                setStatusMsg('Password successfully updated.');
            } else if (values.newEmail) {
                await putUserById({ _id, newVals: { email: values.newEmail } }).unwrap();
                setChangeEmail(false);
                setStatusMsg('Email successfully updated.');
            }
        } catch (error) {
            if (!error?.data) {
                setStatusMsg('No server response.');
            } else if (error.status === 404) {
                setStatusMsg('This user does not exist.');
            } else if (error.status === 403) {
                setStatusMsg('Not authorized to perform this operation.');
            } else {
                setStatusMsg('Operation failed. Please try again.');
            }
        }
    };

    const delUser = async (_id) => {
        try {
            await deleteUserById({ _id }).unwrap();

            setDeleteAccount(false);
            setAccountDeleted(true);
            setStatusMsg(false);
            
            setTimeout(() => {
                navigate('/');
                dispatch(clearCurrentUser());
            }, '2000');
        } catch (error) {
            if (!error?.data) {
                setStatusMsg('No server response.');
            } else if (error.status === 404) {
                setStatusMsg('This user does not exist.');
            } else if (error.status === 403) {
                setStatusMsg('Not authorized to perform this operation.');
            } else {
                setStatusMsg('Operation failed. Please try again.');
            }
        }
    };

    return (
        <Container className='bg-light'>
            <Row className='border'>
                    <h4 className='pt-2'>Manage Your Account</h4>
            </Row>
            <Row>
                {statusMsg &&
                    <p><b>{statusMsg}</b></p>
                }
            </Row>
            <Row className='border border-top-0 text-center'>
                <Col md='6' className='py-3'>
                    <b>Username</b>: {username}<br/>
                    <b>Email</b>: {email}<br/>
                </Col>
                <Col md='6' className='py-3 d-flex justify-content-center align-items-center'>
                    <UpdateAccountDropdown 
                        setChangeUsername={setChangeUsername}
                        setChangePassword={setChangePassword}
                        setChangeEmail={setChangeEmail}
                        setDeleteAccount={setDeleteAccount}
                    />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center py-3 border border-top-0'>
                {changeUsername ? (
                    <ChangeUsernameForm
                        putUser={updateUserDetails}
                        setChangeUsername={setChangeUsername}
                    />
                ) : changePassword ? (
                    <ChangePasswordForm 
                        putUser={updateUserDetails} 
                        setChangePassword={setChangePassword} 
                    />
                ) : changeEmail ? (
                    <ChangeEmailForm 
                        putUser={updateUserDetails}
                        setChangeEmail={setChangeEmail}
                    />
                ) : deleteAccount ? (
                    <>
                        <div className='mb-3'>
                            Are you sure you want to delete your account?{' '}
                            This operation is <b style={{ color: 'red' }}>permanent</b>.
                        </div>
                        <Col md='6'>
                            <Button 
                                color='danger' 
                                className='me-5 rounded-0 btn-sm' 
                                type='submit' 
                                onClick={() => delUser(_id)}
                            >
                                Delete
                            </Button>
                            <Button 
                                type='button'
                                className='rounded-0 btn-sm' 
                                onClick={() => setDeleteAccount(false)}
                            >
                                Cancel
                            </Button>
                        </Col>
                    </>
                ) : accountDeleted ? (
                    <div>Your account has been deleted.  Redirecting...</div>
                ) : null}
            </Row>
        </Container>
    );
};

export default UserPanel;