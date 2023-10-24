import { Col, FormGroup, Label, Button } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const ChangeEmailForm = ({ putUser, setChangeEmail }) => {
    const changeEmailSchema = yup.object().shape({
        currentEmail: yup
            .string()
            .email('Invalid email format.')
            .required('Required.'),
        newEmail: yup
            .string()
            .email('Invalid email format.')
            .required('Required.'),
        confirmNewEmail: yup
            .string()
            .email('Invalid email format.')
            .required('Required.')
            .oneOf([yup.ref('newEmail'), null], 'Emails do not match.')
    });

    return (
        <Formik
            initialValues={{
                currentEmail: '',
                newEmail: '',
                confirmNewEmail: ''
            }}
            validationSchema={changeEmailSchema}
            onSubmit={(values) => putUser(values)}
        >
            {(formik) => {
                const { errors, touched } = formik;
                return (
                    <Form className='p-2 pt-4'>
                        <FormGroup row className='justify-content-center'>
                            <Label htmlFor='currentEmail' xl='3' lg='4'>
                                Current Email: 
                            </Label>
                            <Col lg='6' xl='8'>
                                <Field 
                                    name='currentEmail'
                                    type='email'
                                    autoComplete='off'
                                    className={`form-control${errors.currentEmail && touched.currentEmail ? ' is-invalid' : ''}`}
                                />
                                {errors.currentEmail && touched.currentEmail ? (
                                    <ErrorMessage
                                        component='span'
                                        name='currentEmail'
                                        className='invalid-feedback'
                                    />
                                ) : null}
                            </Col>
                        </FormGroup>
                        <FormGroup row className='justify-content-center'>
                            <Label htmlFor='newEmail' xl='3' lg='4'>
                                New Email: 
                            </Label>
                            <Col lg='6' xl='8'>
                                <Field 
                                    name='newEmail'
                                    type='email'
                                    autoComplete='off'
                                    className={`form-control${errors.newEmail && touched.newEmail ? ' is-invalid' : ''}`}
                                />
                                {errors.newEmail && touched.newEmail ? (
                                    <ErrorMessage
                                        component='span'
                                        name='newEmail'
                                        className='invalid-feedback'
                                    />
                                ) : null}
                            </Col>
                        </FormGroup>
                        <FormGroup row className='justify-content-center'>
                            <Label htmlFor='confirmNewEmail' xl='3' lg='4'>
                                Confirm New Email: 
                            </Label>
                            <Col lg='6' xl='8'>
                                <Field 
                                    name='confirmNewEmail'
                                    type='password'
                                    autoComplete='off'
                                    className={`form-control${errors.confirmNewEmail && touched.confirmNewEmail ? ' is-invalid' : ''}`}
                                />
                                {errors.confirmNewEmail && touched.confirmNewEmail ? (
                                    <ErrorMessage
                                        component='span'
                                        name='confirmNewEmail'
                                        className='invalid-feedback'
                                    />
                                ) : null}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col className='mt-3 d-flex justify-content-center'>
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
                                    onClick={() => setChangeEmail(false)}>
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

export default ChangeEmailForm;