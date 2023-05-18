import { useState } from 'react';
import {
    Container,
    Col,
    Row,
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText,
    CardFooter,
    Button
} from 'reactstrap';
import InteractiveGlobe from './datavis/InteractiveGlobe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const GlobePanel = () => {
    const [countryData, setCountryData] = useState(null);
    const [viewType, setViewType] = useState('species');

    return (
        <Container fluid>
            <Row className='mb-3'>
                <h2 className='text-center'>Biodiversity around the world.</h2>
            </Row>
            <Row>
                <Col md='8' className='mb-2 d-flex flex-row align-items-center'>
                    <h5 className='me-3'>View:</h5>
                    <Button
                        type='button'
                        color={viewType === 'species' ? 'success' : 'secondary'}
                        className='btn-sm rounded-0 me-2'
                        onClick={() => setViewType('species')}
                    >
                        Species
                    </Button>
                    <Button
                        type='button'
                        color={viewType === 'megadiverse' ? 'success' : 'secondary'}
                        className='btn-sm rounded-0 me-2'
                        onClick={() => setViewType('megadiverse')}
                    >
                        Megadiverse
                    </Button>
                    <Button
                        type='button'
                        color={viewType === 'endangered' ? 'success' : 'secondary'}
                        className='btn-sm rounded-0 me-2'
                        onClick={() => setViewType('endangered')}
                    >
                        Endangered
                    </Button>
                    <Button
                        type='button'
                        color={viewType === 'hotspots' ? 'success' : 'secondary'}
                        className='btn-sm rounded-0 me-2'
                        onClick={() => setViewType('hotspots')}
                    >
                        Hotspots
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md='8'>
                    <InteractiveGlobe setCountryData={setCountryData} viewType={viewType} />
                </Col>
                <Col md='4'>
                    <Card className='globe-data-card rounded-0'>
                        <CardBody className='text-center'>
                            <CardTitle>
                                <h4>{viewType === 
                                    'species' ? 'Species Overview' :
                                    'megadiverse' ? 'Megadiverse Countries' :
                                    'endangered' ? 'Endangered Species' :
                                    'hotspots' ? 'Biodiversity Hotspots' :
                                    'Info Panel'
                                }</h4>
                            </CardTitle>
                            {countryData ? (
                                <CardSubtitle className='text-success'>
                                    <b>{countryData.name}</b>
                                </CardSubtitle>
                            ) : (
                                <CardSubtitle>
                                    <small className='text-muted'>
                                        <i>Choose a country to learn more.</i>
                                    </small>
                                </CardSubtitle>
                            )}
                            {countryData &&
                                <CardText>
                                    <br />Amphibians: {countryData.amphibianSpecies.toLocaleString("en-US")}<br />
                                    Birds: {countryData.birdSpecies.toLocaleString("en-US")}<br />
                                    Fishs: {countryData.fishSpecies.toLocaleString("en-US")}<br />
                                    Mammals: {countryData.mammalSpecies.toLocaleString("en-US")}<br />
                                    Reptiles: {countryData.reptileSpecies.toLocaleString("en-US")}<br />
                                    Vascular Plants: {countryData.vascularPlantSpecies.toLocaleString("en-US")}<br />
                                    Total: {countryData.totalSpecies.toLocaleString("en-US")}<br /><br />
                                    GBI <FontAwesomeIcon icon={faCircleQuestion} />: {countryData.globalBiodiversityIndex}
                                </CardText>
                            }
                        </CardBody>
                        <CardFooter>
                            <p className='text-center'>
                                <b>Sources: </b><br />
                                <a href='https://www.iucnredlist.org/'>IUCN Red List</a><br />
                                <a href='https://theswiftest.com/biodiversity-index/'>The Swiftest</a><br />
                                <a href='http://datazone.birdlife.org/country'>BirdLife Data Zone</a><br />
                                <a href='https://amphibiaweb.org/'>AmphibiaWeb</a><br />
                                <a href='https://www.fishbase.in/search.php'>The Reptile Database</a><br />
                            </p>
                        </CardFooter>
                    </Card>
                    <p className='mt-4 text-center'><b>Note: </b>All data is estimated.  The map tool is incomplete, particularly in the Caribbean, and will be improved in the future.</p>
                    <p className='text-center text-muted'>Last updated 18 May 2023.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default GlobePanel;