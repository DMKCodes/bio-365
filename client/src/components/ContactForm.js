import { useState } from 'react';
import { Col, Button, FormGroup } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [mailSent, setMailSent] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const sendEmail = (values) => {
        return emailjs.send('service_u7sogze', 'contact_form', values, 'cMM44Klo6HrPOcopj')
            .then((response) => {
                return true;
            }, (error) => {
                return false;
            })
    };

    const handleSubmit = async (values) => {
        try {
            const send = await (sendEmail(values));

            if (send) {
                setMailSent(true);
            } else {
                setMailSent(false);
            }

            setFormSubmitted(true);
        } catch (error) {
            setMailSent(false);
            setFormSubmitted(true);
        }
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
            <Form className='contact-form mb-3'>
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
                            className='form-control no-resize rounded-0'
                            aria-label='message'
                        />
                        <ErrorMessage name='message' className='mb-0'>
                            {(msg) => <span className='text-danger'>{msg}</span>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row className='text-center'>
                    <Col md='12'>
                        {formSubmitted && mailSent ? (
                            <p className='text-success fw-bold'>
                                Your feedback has been sent. Thank you!
                            </p>
                        ) : formSubmitted && !mailSent ? (
                            <p className='text-danger fw-bold'>
                                An error has occurred. Please try resending.
                            </p>
                        ) : !formSubmitted ? (
                            <Button 
                                type='submit' 
                                color='success' 
                                className='button rounded-0 btn-sm'
                            >
                                Send
                            </Button>
                        ) : null}
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default ContactForm;