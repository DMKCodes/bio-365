import { useState, useEffect } from 'react';
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
import Globe from 'react-globe.gl';
import countriesData from '../../datasets/countries.json';
import { SPECIES_COUNTRIES } from '../../datasets/speciesByCountry.js';

const InteractiveGlobe = () => {
    const [countries, setCountries] = useState({ features: [] });
    const [hover, setHover] = useState();

    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        setCountries(countriesData);
    }, []);

    const getCountryData = (name) => {
        const data = SPECIES_COUNTRIES.filter((country) => country.name.toLowerCase() === name);
        return data;
    };

    const showCountryData = (polygonData) => {
        if (polygonData) {
            const data = getCountryData(polygonData.properties.ADMIN.toLowerCase());
            
            setCountryData(data[0]);
        } else {
            setCountryData(null);
        }
    };

    return (
        <Container fluid>
            <Row>
                <h2 className='text-center'>Biodiversity around the world.</h2>
            </Row>
            <Row>
                <Col md='8' className='mb-2 d-flex flex-row align-items-center'>
                    <h5 className='me-3'>View:</h5>
                    <Button
                        type='button'
                        color='success'
                        className='btn-sm'
                    >
                        Species
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md='8'>
                    <Globe
                        width={800}
                        height={650}
                        lineHoverPrecision={0}

                        polygonsData={countries.features.filter((d) => d.properties.ISO_A2 !== 'AQ')}
                        polygonAltitude={(d) => d === hover ? 0.12 : 0.06}
                        polygonCapColor={d => d === hover ? 'steelblue' : 'white'}
                        polygonSideColor={() => 'rgba(0, 100, 0, 0.15'}
                        polygonStrokeColor={() => '#111'}
                        polygonsTransitionDuration={300}

                        onPolygonHover={setHover}
                        onPolygonClick={(polygonData, polygonIndex) => showCountryData(polygonData)}
                    />
                </Col>
                <Col md='4'>
                    <Card className='globe-data-card'>
                        <CardBody className='text-center'>
                            <CardTitle>
                                <h4>Country Data</h4>
                            </CardTitle>
                            {countryData &&
                                <CardSubtitle>
                                    <b>{countryData.name}</b>
                                </CardSubtitle>
                            }
                            {countryData &&
                                <CardText>
                                    <br />Amphibians: {countryData.amphibianSpecies}<br />
                                    Birds: {countryData.birdSpecies}<br />
                                    Fishs: {countryData.fishSpecies}<br />
                                    Mammals: {countryData.mammalSpecies}<br />
                                    Reptiles: {countryData.reptileSpecies}<br />
                                    Vascular Plants: {countryData.vascualarPlantSpecies}<br />
                                    Total: {countryData.totalSpecies}<br /><br />
                                    GBI: {countryData.globalBiodiversityIndex}
                                </CardText>
                            }
                        </CardBody>
                        <CardFooter>
                            <p>
                                <b>Sources: </b><br />
                                <a href='https://www.iucnredlist.org/'>IUCN Red List</a><br />
                                <a href='https://theswiftest.com/biodiversity-index/'>The Swiftest</a><br />
                                <a href='http://datazone.birdlife.org/country'>BirdLife Data Zone</a><br />
                                <a href='https://amphibiaweb.org/'>AmphibiaWeb</a><br />
                                <a href='https://www.fishbase.in/search.php'>The Reptile Database</a><br />
                            </p>
                        </CardFooter>
                    </Card>
                    <p className='mt-5 text-center'><b>NOTE: </b>All data is estimated.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default InteractiveGlobe;