import { Col, Button, FormGroup } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

const ContactForm = () => {
    const handleSubmit = (values) => {
        return;
        // Placeholder for email.js
    };

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: ''
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form className='contact-form'>
                <FormGroup row>
                    <Col xs='6' className='pe-1'>
                        <Field
                            name='name'
                            placeholder='Name'
                            className='form-control rounded-0 form-field'
                            aria-label='name'
                        />
                        <ErrorMessage name='name'>
                            {(msg) => <span className='text-danger'>{msg}</span>}
                        </ErrorMessage>
                    </Col>
                    <Col xs='6' className='ps-1'>
                        <Field
                            name='email'
                            placeholder='Email'
                            type='email'
                            className='form-control rounded-0 form-field'
                            aria-label='email'
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <span className='text-danger'>{msg}</span>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md='12'>
                        <Field
                            name='message'
                            as='textarea'
                            placeholder='Your message here!'
                            rows='4'
                            className='form-control rounded-0'
                            aria-label='message'
                        />
                        <ErrorMessage name='message' className='mb-0'>
                            {(msg) => <span className='text-danger'>{msg}</span>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md='12'>
                        <Button 
                            type='submit' 
                            color='success' 
                            className='button rounded-0 btn-sm'
                        >
                            Send
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default ContactForm;