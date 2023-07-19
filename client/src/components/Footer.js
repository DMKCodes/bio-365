import { Container, Row, Col, Nav, NavItem, Navbar } from 'reactstrap';
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
                        <Navbar>
                            <Nav navbar className='w-100'>
                                <NavItem>
                                    <NavLink className='nav-link' to='/news'>
                                        News
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/learn'>
                                        Learn
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/stories'>
                                        Stories
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/resources'>
                                        Resources
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col md='4' xs='6' className='text-center'>
                        <h5 className='mb-2 fw-bold'>
                            Contact
                        </h5>
                        <div>
                            <p className='my-4'>
                                Em:{' '}
                                <a href='mailto:admin@biodiversity365.org'>
                                    admin@biodiversity365.org
                                </a>
                            </p>
                            <small className='text-muted'>
                                Socials coming soon!
                            </small>
                        </div>
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