import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {
    useGetAllUsersQuery,
    useDeleteAllUsersMutation
} from '../../features/users/authApiSlice';
import UserCard from './UserCard';

const UserList = () => {
    const [allUsers, setAllUsers] = useState('');
    const [getAllUsersStarted, setGetAllUsersStarted] = useState(false);
    const [statusMsg, setStatusMsg] = useState('');

    const getAllUsers = useGetAllUsersQuery(undefined, { skip: !getAllUsersStarted });
    const [deleteAllUsers] = useDeleteAllUsersMutation();

    useEffect(() => {
        if (getAllUsersStarted) {
            if (allUsers) {
                getAllUsers.refetch();
            }
            const { data, error } = getAllUsers;

            if (error) {
                setStatusMsg('Error retrieving users.');
                setGetAllUsersStarted(false);
            } else if (data) {
                setStatusMsg('Successfully retrieved all users.');
                setAllUsers(data.allUsers);
                setGetAllUsersStarted(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getAllUsersStarted, getAllUsers]);

    const delAllUsers = async () => {
        try {
            await deleteAllUsers().unwrap();

            setStatusMsg('All other users successfully deleted.');
            setAllUsers('');
        } catch (error) {
            if (!error?.data) {
                setStatusMsg('No server response.');
            } else if (error.status === 404) {
                setStatusMsg('No other users to delete.');
            } else if (error.status === 403) {
                setStatusMsg('Not authorized to perform this operation.');
            } else {
                setStatusMsg('Internal error.  Please try again later.');
            }
        };
    };

    return (
        <Container className='p-0'>
            <Row className='d-flex justify-content-center border border-top-0 p-3 mx-auto'>
                <h5 className='pf fw-bold'><b>All Users</b></h5>
                <Col xs='12' className='mt-2'>
                    <Button
                        type='submit'
                        color='success'
                        className='rounded-0 me-4 btn-sm'
                        onClick={() => setGetAllUsersStarted(true)}
                    >
                        Populate Users
                    </Button>
                    <Button
                        type='submit'
                        color='danger'
                        className='rounded-0 btn-sm'
                        onClick={() => delAllUsers()}
                    >
                        Delete All Users
                    </Button>
                </Col>
                {statusMsg &&
                    <p className='my-3'><b>{statusMsg}</b></p>
                }
                {allUsers ? (
                    <Row className='p-0 d-flex justify-content-center'>
                        {allUsers.map((user, index) => {
                            return (
                                <Col xl='4' md='6' key={index} className='mx-2 p-2'>
                                    <UserCard
                                        user={user}
                                        setStatusMsg={setStatusMsg}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                ) : (
                    null
                )}
            </Row>
        </Container>
    );
};

export default UserList;