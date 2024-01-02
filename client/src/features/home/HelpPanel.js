import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks/ThemeProvider';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import volunteerImg from '../../app/media/ocean-cleanup.jpg';
import engageImg from '../../app/media/home-engage.jpg';
import donateImg from '../../app/media/home-donate.jpg';

const HelpPanel = () => {
    const { mode } = useTheme();

    return (
        <Row className='position-relative d-flex justify-content-center'>
            <div className='home-help-panel-header bg-dark text-light text-center'>
                <h2 className='pf mt-5 mb-3 fw-bold'>How Can We Help?</h2>
                <p>Stewardship of our environment is both a moral obligation and an urgent necessity, and every contribution makes a difference.</p>
            </div>
            <div className={`home-help-panel-content ${mode === 'dark' ? 'bg-dark border border-light' : 'bg-light'}`}>
                <Row className='p-0'>
                    <Col lg='6' className='d-flex flex-column justify-content-center p-4'>
                        <h5 className='pf fw-bold'>Donate</h5>
                        <p>
                            Direct conservation, education, and advocacy are our most effective tools in the fight to ensure a sustainable future — not just for our planet's wildlife, but for humans as well. Donating to reputable conservation groups ensures your money directly supports biodiversity where it's needed most.
                        </p>
                        <Button color='success' className='rounded-0 mb-3 me-auto'>
                            <NavLink className='nav-link' to='/donations'>
                                Support Biodiversity<FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                            </NavLink>
                        </Button>
                    </Col>
                    <Col lg='6' className='px-0'>
                        <img 
                            src={donateImg} 
                            alt='hands holding coins and note saying make a change' 
                            className='home-help-panel-img img-fluid h-100'
                        />
                    </Col>
                </Row>
                <Row className='p-0'>
                    <Col lg='6' className='d-none d-lg-flex flex-column justify-content-center px-0'>
                        <img 
                            src={volunteerImg} 
                            alt='volunteers cleaning up beaches' 
                            className='home-help-panel-img img-fluid h-100'
                        />
                    </Col>
                    <Col lg='6' className='d-flex flex-column justify-content-center p-4'>
                        <h5 className='pf fw-bold'>Volunteer</h5>
                        <p>
                            If you prefer to contribute in person, consider volunteering with an environmental organization in your state or country, or check out citizen science opportunities, such as with the{' '}
                            <a
                                href='https://www.gbif.org/citizen-science'
                                target='_blank'
                                rel='noreferrer'
                                className={`${mode === 'dark' ? 'text-light' : 'text-dark'}`}
                            >
                                Global Biodiversity Information Facility
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' className='ms-1' />
                            </a>
                            .
                        </p>
                        <p>Even the largest non-profits rely on volunteers for support in areas as diverse as data gathering and analysis, monitoring for invasive species, habitat rehabilitation, and more. No matter your skillset, you have a role to play.</p>
                    </Col>
                    <Col lg='6' className='d-flex d-lg-none flex-column justify-content-center px-0'>
                        <img 
                            src={volunteerImg} 
                            alt='volunteers cleaning up beaches' 
                            className='home-help-panel-img img-fluid h-100'
                        />
                    </Col>
                </Row>
                <Row className='p-0'>
                    <Col lg='6' className='d-flex flex-column justify-content-center p-4'>
                        <h5 className='pf fw-bold'>Keep it Local</h5>
                        <p>
                            Governments, scientists, and conservation groups often lead the way when it comes to wildlife conservation, but they're just one piece of the puzzle. Studies in recent years have routinely demonstrated the power of{' '}
                            <a
                                href='https://www.licci.eu/'
                                target='_blank'
                                rel='noreferrer'
                                className={`${mode === 'dark' ? 'text-light' : 'text-dark'}`}
                            >
                                indigenous peoples and community-level knowledge
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' className='ms-1' />
                            </a>
                            {' '}to affect change both large and small.
                        </p>
                        <p className='mb-0'>
                            Whether by starting a discussion group, organizing a cleanup project, contacting a local official, or planting a community garden, engaging with your community is a deeply rewarding opportunity to make a difference right outside your front door.
                        </p>
                    </Col>
                    <Col lg='6' className='d-flex flex-column justify-content-center px-0'>
                        <img 
                            src={engageImg} 
                            alt='two sets of hands holding tomatoes' 
                            className='home-help-panel-img img-fluid h-100'
                        />
                    </Col>
                </Row>
            </div>
        </Row>
    );
};

export default HelpPanel;