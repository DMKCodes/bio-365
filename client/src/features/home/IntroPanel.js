import { Row, Col } from 'reactstrap';

const IntroPanel = () => {
    return (
        <Row className='pt-5 px-3 px-md-0'>
            <Col lg='5' className='ps-0 pe-0 pe-lg-5'>
                <h2 className='pf fw-bold'>Joining the Global Fight for Biodiversity</h2>
                <p>Our planet and the wildlife that call it home are in a state of crisis, and human activity is to blame. As we face down one of the most consequential moments in our natural history, education and awareness are more important than ever.</p>
            </Col>
            <Col lg='7' className='mt-4 mt-lg-0'>
                <Row>
                    <Col md='6' className='mb-3 mb-lg-0'>
                        <h4 className='pf fw-bold text-success pb-1'>
                            Mission
                        </h4>
                        <p className='pe-0 pe-md-3 pe-lg-5'>
                            My mission is to provide a free biodiversity learning resource with a focus on exposing lesser-known conservation challenges.  This platform joins original content, external resources, and the latest in biodiversity news and research into a platform accessible and enlightening to all.
                        </p>
                    </Col>
                    <Col md='6' className='mb-lg-0'>
                        <h4 className='pf fw-bold text-success pb-1'>
                            Motivation
                        </h4>
                        <p className='pe-0 pe-md-3 pe-lg-5'>
                            A crisis this immense can feel daunting — like you want to help, but you don't know where to start. In curating this platform, I hope to make one of our generation's foremost calls to action a little bit easier to answer.
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default IntroPanel;