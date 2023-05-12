import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, clearCurrentUser } from '../../features/users/userSlice';
import { useNavigate } from 'react-router-dom';
import {
    usePutUserByIdMutation, 
    useDeleteUserByIdMutation 
} from '../../features/users/authApiSlice';
import { Container, Row, Col, Button } from 'reactstrap';
import ChangePasswordForm from './ChangePasswordForm';

const UserPanel = () => {
    const [changePassword, setChangePassword] = useState(false);
    const [passwordChanged, setPasswordChanged] = useState(false);

    const [deleteAccount, setDeleteAccount] = useState(false);
    const [accountDeleted, setAccountDeleted] = useState(false);

    const [statusMsg, setStatusMsg] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector(selectCurrentUser);
    const { _id, username, email } = currentUser;

    const [putUserById] = usePutUserByIdMutation();
    const [deleteUserById] = useDeleteUserByIdMutation();

    const putUserPassword = async (values) => {
        try {
            await putUserById({ _id, newVals: { password: values.newPassword } }).unwrap();
            setChangePassword(false);
            setPasswordChanged(true);
            setStatusMsg(false);
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
        <Container>
            <Row className='border'>
                <h4 className='pt-2'>User Panel</h4>
                {statusMsg &&
                    <p><b>{statusMsg}</b></p>
                }
            </Row>
            <Row className='pt-3 border border-top-0 text-center'>
                <Col className='pb-3'>
                    <b>Username</b>: {username}<br/>
                    <b>Email</b>: {email}<br/>
                </Col>
            </Row>
            <Row className='py-3 border border-top-0'>
                <Col md='4' className='border-end'>
                    <Button 
                        color='success'
                        className='rounded-0 btn-sm'
                        type='submit' 
                        onClick={() => setChangePassword(true)}
                    >
                        Change Username
                    </Button>
                </Col>
                <Col md='4' className='border-end'>
                    <Button 
                        color='success'
                        className='rounded-0 btn-sm'
                        type='submit' 
                        onClick={() => {
                            setDeleteAccount(false);
                            setChangePassword(true);
                        }}
                    >
                        Change Password
                    </Button>
                </Col>
                <Col md='4' className='border-end'>
                    <Button 
                        color='danger'
                        className='rounded-0 btn-sm'
                        type='submit' 
                        onClick={() => {
                            setChangePassword(false);
                            setDeleteAccount(true);
                        }}
                    >
                        Delete Account
                    </Button>
                </Col>
                <Col md='8'>

                </Col>  
            </Row>
            <Row className='d-flex justify-content-center py-3 border border-top-0'>
                    {changePassword ? (
                        <ChangePasswordForm 
                            putUser={putUserPassword} 
                            setChangePassword={setChangePassword} 
                        />
                    ) : passwordChanged ? (
                        <div>Your password has been successfully changed.</div>
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