import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../features/users/userSlice';
import { useLoginMutation } from '../../features/users/authApiSlice';
import usePersist from '../../hooks/usePersist';
import { Col, Button, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const LoginForm = ({ setModalOpen, setError, setErrorMsg }) => {
    const dispatch = useDispatch();

    const [, setPersist] = usePersist();

    const [login] = useLoginMutation();

    const loginSchema = yup.object().shape({
        username: yup
            .string()
            .min(4, 'Must be at least 4 characters.')
            .max(16, 'Cannot be more than 16 characters.')
            .required('Required.'),
        password: yup
            .string()
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[0-9]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase letter, one number and one special character."
            )
            .required('Required.')
    });

    const handleLoginSubmit = async (values) => {
        try {
            if (values.remember) {
                setPersist(true);
            }

            const response = await login({
                username: values.username,
                password: values.password
            }).unwrap();

            const user = response.user;
            const token = response.token;
            dispatch(setCurrentUser({ user, token }));

            setTimeout(() => {
                setModalOpen(false);
                setError(false);
            }, 2000);
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
            }, 3000);
        };
    };

    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
                remember: false
            }}
            validationSchema={loginSchema}
            onSubmit={handleLoginSubmit}
        >
            {(formik) => {
                const { errors, touched } = formik;
                return (
                    <Form className='p-3'>
                        <FormGroup row className='d-flex'>
                            <Label htmlFor='username' md='4'>
                                Username:
                            </Label>
                            <Col md='8' className='d-flex flex-column'>
                                <Field
                                    name='username'
                                    autoComplete='off'
                                    className={`${errors.username && touched.username ? 'is-invalid form-control border-dark rounded-0 w-100' : 'form-control border-dark rounded-0 w-100'}`}
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
                            <Col md='8' className='d-flex flex-column'>
                                <Field
                                    name='password'
                                    type='password'
                                    autoComplete='off'
                                    className={`${errors.password && touched.password ? 'form-control border-dark is-invalid rounded-0 w-100' : 'form-control border-dark rounded-0 w-100'}`}
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
                            <Label check htmlFor='remember' xs='4'>
                                Remember me?
                            </Label>
                            <Col xs='8' className='d-flex align-items-center'>
                                <Field
                                    name='remember'
                                    type='checkbox'
                                    className='form-check-input rounded-0 border-dark'
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col className='d-flex justify-content-around'>
                                <Button
                                    type='submit'
                                    color='success'
                                    className='rounded-0'
                                >
                                    Log in
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

export default LoginForm;