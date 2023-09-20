import { Col, FormGroup, Button, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const ChangeUsernameForm = ({ setChangeUsername, putUser }) => {
    const changeUsernameSchema = yup.object().shape({
        newUsername: yup
            .string()
            .min(4, 'Must be at least 4 characters.')
            .max(16, 'Cannot be more than 16 characters.')
            .required('Required.')
    });

    return (
        <Formik
            initialValues={{
                newUsername: ''
            }}
            validationSchema={changeUsernameSchema}
            onSubmit={(values) => putUser(values)}
        >
            {(formik) => {
                const { errors, touched } = formik;
                return (
                    <Form className='p-2 pt-4'>
                        <FormGroup row className='justify-content-center'>
                            <Label htmlFor='newUsername' md='2'>
                                New Username:
                            </Label>
                            <Col xs='8' md='6'>
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
    );
};

export default ChangeUsernameForm;