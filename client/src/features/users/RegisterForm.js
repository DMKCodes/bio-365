import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../features/users/userSlice';
import { useLoginMutation, useRegisterMutation } from '../../features/users/authApiSlice';
import { Col, Button, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const RegisterForm = ({ setModalOpen, setError, setErrorMsg, setActiveTab }) => {
    const dispatch = useDispatch();
    const [register] = useRegisterMutation();
    const [login] = useLoginMutation();

    const registerSchema = yup.object().shape({
        email: yup
            .string()
            .email('Invalid email format.')
            .required('Required.'),
        username: yup
            .string()
            .min(4, 'Must be at least 4 characters.')
            .max(16, 'Cannot be more than 16 characters.')
            .required('Required.'),
        password: yup
            .string()
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[0-9]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special character."
            )
            .required('Required.'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Passwords do not match.')
            .required('Required.')
    });

    const handleRegisterSubmit = async (values) => {
        try {
            await register(values).unwrap();
            handleLoginSubmit(values);
        } catch (error) {
            setError(true);
            if (!error?.data) {
                setErrorMsg('No server response.');
            } else if (error.status === 409) {
                setErrorMsg(error.data.error);
            } else {
                setErrorMsg('Internal error, please try again.  Redirecting...');
            }
            setTimeout(() => {
                setModalOpen(false);
                setError(false);
            }, '3000');
        };
    };

    const handleLoginSubmit = async (values) => {
        try {
            const response = await login(values).unwrap();
            const user = response.user;
            const token = response.token;
            dispatch(setCurrentUser({ user, token }));

            setTimeout(() => {
                setModalOpen(false);
                setActiveTab('login');
                setError(false);
            }, '2000');
        } catch (error) {
            setError(true);
            if (!error?.data) {
                setErrorMsg('No server response.');
            } else if (error.status === 401) {
                setErrorMsg(`${error.data.error}, please try again.  Redirecting...`);
            } else {
                setErrorMsg('Login failed, please try again. Redirecting...');
            }
            setTimeout(() => {
                setModalOpen(false);
                setError(false);
            }, '3000');
        };
    };

    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
                email: ''
            }}
            validationSchema={registerSchema}
            onSubmit={handleRegisterSubmit}
        >
            {(formik) => {
                const { errors, touched } = formik;
                return (
                    <Form className='p-3'>
                        <FormGroup row>
                            <Label htmlFor='username' md='4'>
                                Username:
                            </Label>
                            <Col md='8' className='d-flex align-items-center'>
                                <Field
                                    name='username'
                                    autoComplete='off'
                                    className={`form-control${errors.username && touched.username ? 'is-invalid rounded-0 w-100' : 'rounded-0 w-100'}`}
                                />
                                {errors.username && touched.username ? (
                                    <ErrorMessage
                                        component='span'
                                        name='username'
                                        className='invalid-feedback'
                                    />
                                ) : null}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='password' md='4'>
                                Password:
                            </Label>
                            <Col md='8' className='d-flex align-items-center'>
                                <Field
                                    name='password'
                                    type='password'
                                    autoComplete='off'
                                    className={`form-control${errors.password && touched.password ? 'is-invalid rounded-0 w-100' : 'rounded-0 w-100'}`}
                                />
                                {errors.password && touched.password ? (
                                    <ErrorMessage
                                        component='span'
                                        name='password'
                                        className='invalid-feedback'
                                    />
                                ) : null}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='confirmPassword' md='4'>
                                Confirm Password:
                            </Label>
                            <Col md='8' className='d-flex align-items-center'>
                                <Field
                                    name='confirmPassword'
                                    type='password'
                                    autoComplete='off'
                                    className={`form-control${errors.confirmPassword && touched.confirmPassword ? 'is-invalid rounded-0 w-100' : 'rounded-0 w-100'}`}
                                />
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <ErrorMessage
                                        component='span'
                                        name='confirmPassword'
                                        className='invalid-feedback'
                                    />
                                ) : null}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='email' md='4'>
                                Email:
                            </Label>
                            <Col md='8' className='d-flex align-items-center'>
                                <Field
                                    name='email'
                                    autoComplete='off'
                                    className={`form-control${errors.email && touched.email ? 'is-invalid rounded-0 w-100' : 'rounded-0 w-100'}`}
                                />
                                {errors.email && touched.email ? (
                                    <ErrorMessage
                                        component='span'
                                        name='email'
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
                                    className='me-3 rounded-0'
                                >
                                    Register
                                </Button>
                                <Button 
                                    type='button' 
                                    color='secondary' 
                                    onClick={() => setModalOpen(false)}
                                    className='rounded-0'
                                >
                                    Cancel
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default RegisterForm;