import { NavLink } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import SpeciesSpotlightCard from './SpeciesSpotlightCard';
import defineKeywords from '../../../../utils/defineKeywords';
import { CONSERVATION_CONTENT } from '../../../../app/shared/LEARN_CONTENT';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ConservationPanel = () => {
    return (
        <Row className='d-flex justify-content-center'>
            <Col lg='7' xl='8' className='px-3 px-lg-4 px-xl-5'>
                <h4 className='pf mb-3 fw-bold text-center'>Conservation Strategies</h4>
                <Row>
                    {CONSERVATION_CONTENT.map((text, index) => {
                        const textWithKeywords = defineKeywords(text);
                        return <p key={index}>{textWithKeywords}</p>;
                    })}
                </Row>
                <Row>
                    <h4 className='pf text-center fw-bold my-3'>How can we help?</h4>
                    <p>
                        Direct conservation, education, and advocacy are our most effective tools in the fight to ensure a sustainable future—not just for plants and animals, but for humans as well. Donating to reputable conservation groups is a reliable way to ensure your money directly benefits wildlife across the world.
                    </p>
                    <Button color='success' className='rounded-0 mb-3'>
                        <NavLink className='nav-link' to='/donations'>
                            Donate<FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                        </NavLink>
                    </Button>
                    <p>
                        If you prefer to contribute in person, consider volunteering with an environmental organization in your state or country, or check out citizen science opportunities, such as with the{' '}
                        <a
                            href='https://www.gbif.org/citizen-science'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Global Biodiversity Information Facility
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' className='ms-1' />
                        </a>
                        .
                    </p>
                </Row>
            </Col>
            <Col md='8' lg='5' xl='4' className='d-flex flex-column'>
                <h4 className='pf text-center fw-bold mb-3 mt-3 mt-lg-0'>Conservation Spotlight</h4>
                <SpeciesSpotlightCard />
            </Col>
        </Row>
    );
};

export default ConservationPanel;