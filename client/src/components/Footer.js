import { Container, Row, Col, Nav, NavItem, Navbar } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ContactForm from './ContactForm';
import Donations from './Donations';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container fluid className='p-4 mt-5 bg-dark text-light'>
                <Row className='mt-3'>
                    <Col md='4' xs='4' className='text-center'>
                        <h5 className='mb-2 fw-bold'>
                            Explore
                        </h5>
                        <Navbar>
                            <Nav navbar className='w-100 fw-bold'>
                                <NavItem>
                                    <NavLink className='nav-link text-light' to='/news'>
                                        Articles
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link text-light' to='/learn'>
                                        Learn
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link text-light' to='/stories'>
                                        Stories
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link text-light' to='/resources'>
                                        Resources
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col md='4' xs='8' className='mb-5 text-center d-flex flex-column'>
                        <h5 className='mb-4 fw-bold'>
                            Support Biodiversity
                        </h5>
                        <Donations />
                        <h5 className='mt-4 fw-bold'>
                            Socials
                        </h5>
                        <small className='text-muted'>Coming soon!</small>
                    </Col>
                    <Col md='4' xs='12' className='d-flex flex-column align-items-center'>
                        <h5 className='mb-4 fw-bold'>
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
                        Copyright &copy; 2023 Douglas Kissack<br />
                        All Rights Reserved
                    </small>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;