import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ContactForm from './ContactForm';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container className='p-2 border-top border-5 border-dark'>
                <Row className='mt-3'>
                    <Col md='4' xs='6' className='text-center'>
                        <h5 className='mb-2 fw-bold'>
                            Explore
                        </h5>

                    </Col>
                    <Col md='4' xs='6' className='text-center'>
                        <h5 className='mb-2 fw-bold'>
                            Contact
                        </h5>
                        <small className='text-muted'>
                            Socials coming soon!
                        </small>
                    </Col>
                    <Col md='4' xs='12' className='text-center'>
                        <h5 className='mb-2 fw-bold'>
                            Feedback
                        </h5>
                        <ContactForm />
                    </Col>
                </Row>
                <Row className='text-center'>
                    <h4 className='logo mb-2'>
                        Bio<span className='text-success'>diversity</span>365
                    </h4>
                    <small className='text-muted'>
                        Copyright &copy; 2023 Douglas Kissack
                    </small>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;