import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { RESOURCES } from '../app/shared/RESOURCES';

const ResourcesPage = () => {
    return (
        <Container>
            <Row className='text-center mb-5'>
                <h4>Internal Resources</h4>
                <NavLink className='nav-link' to='/glossary'>
                    Glossary
                </NavLink>
            </Row>
            <Row className='text-center mb-5'>
                <h4>External Resources</h4>
                {RESOURCES.map((resource) => {
                    return (
                        <Col md='6' lg='4'>
                            <Card>
                                <CardHeader>
                                    {resource.name}
                                </CardHeader>
                                <CardBody>
                                    <a href={resource.link} target='_blank' rel='noreferrer'>
                                        Visit
                                    </a>
                                    <br />Category: {resource.category}
                                </CardBody>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
            <Row className='text-center mb-5'>
                <h4>Contribute</h4>
                <p>Donate or contact to make original content.</p>
            </Row>
        </Container>
    );
};

export default ResourcesPage;