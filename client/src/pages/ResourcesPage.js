import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import VideoBackground from '../components/VideoBackground';
import { RESOURCE_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';
import { RESOURCES } from '../app/shared/RESOURCES';

const ResourcesPage = () => {
    return (
        <Container fluid className='p-0'>
            <VideoBackground video={RESOURCE_PAGE_VIDEO_BG} />
            <Header />

            <Container className='my-5'>
                <Row className='text-center'>
                    <h4>Internal Resources</h4>
                    <NavLink className='nav-link' to='/glossary'>
                        Glossary
                    </NavLink>
                </Row>

                <Row className='text-center mb-5'>
                    <h4>External Resources</h4>
                    {RESOURCES.map((resource, index) => {
                        return (
                            <Col md='6' lg='4' key={index}>
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
            </Container>
        </Container>
    );
};

export default ResourcesPage;