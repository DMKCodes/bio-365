import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/ThemeProvider';
import { selectCurrentUser, clearCurrentUser } from '../../features/users/userSlice';
import { usePutUserByIdMutation, useDeleteUserByIdMutation } from '../../features/users/authApiSlice';
import { 
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardFooter,
    FormGroup,
    Label
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const UserCard = ({ user, setStatusMsg }) => {
    const { mode } = useTheme();

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

    const changeUsernameSchema = yup.object().shape({
        newUsername: yup
            .string()
            .min(4, 'Must be at least 4 characters.')
            .max(16, 'Cannot be more than 16 characters.')
            .required('Required.')
    });

    return (
        <Card className={`user-card rounded-0 ${mode === 'dark' ? 'bg-dark border-light' : 'bg-light'}`}>
            <CardHeader>
                <CardText>
                    <b>Username</b>: {username}
                </CardText>
            </CardHeader>
            <CardBody>
                <p className='mb-1'>ID: {_id}</p>
                <p className='mb-1'>Email: {email}</p>
                <p className='mb-1'>Admin: {admin ? 'Yes' : 'No'}</p>
            </CardBody>
            <CardFooter className='d-flex justify-content-center'>
                {changeUsername ? (
                    <Formik
                        initialValues={{
                            newUsername: ''
                        }}
                        validationSchema={changeUsernameSchema}
                        onSubmit={(values) => putUserUsername(values)}
                    >
                        {(formik) => {
                            const { errors, touched } = formik;
                            return (
                                <Form className='p-2'>
                                    <FormGroup row className='justify-content-center'>
                                        <Label htmlFor='newUsername'>
                                            New Username:
                                        </Label>
                                        <Col>
                                            <Field 
                                                name='newUsername'
                                                autoComplete='off'
                                                className={`form-control${errors.newUsername && touched.newUsername ? ' is-invalid' : ''}`}
                                            />
                                            {errors.newUsername && touched.newUsername ? (
                                                <ErrorMessage
                                                    component='span'
                                                    name='newUsername'
                                                    className='invalid-feedback'
                                                />
                                            ) : null}
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col className='d-flex justify-content-center'>
                                            <Button 
                                                type='submit' 
                                                color='success' 
                                                className='me-3 rounded-0 btn-sm'
                                            >
                                                Submit
                                            </Button>
                                            <Button 
                                                type='button'
                                                className='rounded-0 btn-sm'
                                                onClick={() => setChangeUsername(false)}
                                            >
                                                Cancel
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            );
                        }}
                    </Formik>
                ) : usernameChanged ? (
                    <p className='text-success'><b>Username successfully changed.</b></p>
                ) : userDeleted ? (
                    <p className='text-success'><b>User successfully deleted.</b></p>
                ) : deleteUser ? (
                    <Row className='d-flex flex-column align-items-center'>
                        <p>Are you sure you want to delete this account?  This operation is <b style={{ color: 'red' }}>permanent</b>.</p>
                        <span>
                            <Button
                                type='submit'
                                color='danger'
                                className='me-2 rounded-0 btn-sm'
                                onClick={() => delUser()}
                            >
                                Confirm
                            </Button>
                            <Button
                                type='button'
                                color='secondary'
                                className='rounded-0 btn-sm'
                                onClick={() => setDeleteUser(false)}
                            >
                                Cancel
                            </Button>
                        </span>
                    </Row>
                ) : (
                    <>
                        <Button
                            type='button'
                            color={mode === 'dark' ? 'light' : 'dark'}
                            className='rounded-0 btn-sm me-3'
                            onClick={() => setChangeUsername(true)}
                        >
                            Change Username
                        </Button>

                        <Button
                            type='button'
                            color='danger'
                            className='rounded-0 btn-sm'
                            onClick={() => setDeleteUser(true)}
                        >
                            Delete User
                        </Button>
                    </>
                )}
            </CardFooter>
        </Card>
    );
};

export default UserCard;