import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentUser, clearCurrentUser } from '../../features/users/userSlice';
import { usePutUserByIdMutation, useDeleteUserByIdMutation } from '../../features/users/authApiSlice';
import { Row, Col, Button } from 'reactstrap';
import ChangeUsernameForm from './ChangeUsernameForm';

const UserCard = ({ user, setStatusMsg }) => {
    const [changeUsername, setChangeUsername] = useState(false);
    const [usernameChanged, setUsernameChanged] = useState(false);
    
    const [deleteUser, setDeleteUser] = useState(false);
    const [userDeleted, setUserDeleted] = useState(false);

    const { _id, username, email, admin } = user;
    const currentUser = useSelector(selectCurrentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [putUserById] = usePutUserByIdMutation();
    const [deleteUserById] = useDeleteUserByIdMutation();

    const putUserUsername = async (values) => {
        if (values.newUsername === username) {
            setStatusMsg('New username cannot be the same as current username.');
            return;
        }
        try {
            await putUserById({
                _id,
                newVals: { username: values.newUsername }
            }).unwrap();

            setChangeUsername(false);
            setUsernameChanged(true);
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

    const delUser = async () => {
        try {
            await deleteUserById({ _id }).unwrap();

            if (currentUser._id === _id) {
                setStatusMsg('Account successfully deleted.  Redirecting...');
                setTimeout(() => {
                    navigate('/');
                    dispatch(clearCurrentUser());
                }, '3000');
            } else {
                setUserDeleted(true);
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

    return (
        <Col xl='5' md='8' key={_id} className='m-1 p-2 border'>
            <p><b>Username</b>: {username}</p>
            <p className='mb-0'>ID: {_id}</p>
            <p className='mb-0'>Email: {email}</p>
            <p>Admin: {admin ? 'Yes' : 'No'}</p>
            <Row className='justify-content-center'>
                {changeUsername ? (
                    <ChangeUsernameForm
                        setChangeUsername={setChangeUsername}
                        putUserUsername={putUserUsername}
                    />
                ) : usernameChanged ? (
                    <p className='text-success'><b>Username successfully changed.</b></p>
                ) : userDeleted ? (
                    <p className='text-success'><b>User successfully deleted.</b></p>
                ) : deleteUser ? (
                    <>
                        <p>Are you sure you want to delete this account?  This operation is <b style={{ color: 'red' }}>permanent</b>.</p>
                        <Col md='6'>
                            <Button
                                type='submit'
                                color='danger'
                                className='me-2 rounded-0 btn-sm'
                                onClick={() => delUser()}
                            >
                                Confirm
                            </Button>
                        </Col>
                        <Col md='6'>
                            <Button
                                type='button'
                                color='secondary'
                                className='rounded-0 btn-sm'
                                onClick={() => setDeleteUser(false)}
                            >
                                Cancel
                            </Button>
                        </Col>
                    </>
                ) : (
                    <>
                        <Col md='6'>
                            <Button
                                type='button'
                                color='warning'
                                className='rounded-0 btn-sm'
                                style={{ width: '175px' }}
                                onClick={() => setChangeUsername(true)}
                            >
                                Change Username
                            </Button>
                        </Col>
                        <Col md='6'>
                            <Button
                                type='button'
                                color='danger'
                                className='rounded-0 btn-sm'
                                onClick={() => setDeleteUser(true)}
                            >
                                Delete User
                            </Button>
                        </Col>
                    </>
                )}
            </Row>
        </Col>
    );
};

export default UserCard;