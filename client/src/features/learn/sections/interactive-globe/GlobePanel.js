import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import InteractiveGlobe from './InteractiveGlobe';
import GlobeDataCard from './GlobeDataCard';
import { SPECIES_COUNTRIES } from '../../../../app/shared/SPECIES_COUNTRIES.js';
import { ENDANGERED_SPECIES } from '../../../../app/shared/ENDANGERED_SPECIES';

const GlobePanel = ({ showGlobePanel, setShowGlobePanel }) => {
    const [countryToDisplay, setCountryToDisplay] = useState(null);
    const [speciesData, setSpeciesData] = useState(null);
    const [endangeredData, setEndangeredData] = useState(null);
    const [viewType, setViewType] = useState('species');

    const rowRef = useRef(null);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        setWidth(rowRef.current.offsetWidth);
    }, []);

    useEffect(() => {
        if (countryToDisplay) {
            if (viewType === 'species') {
                const data = getSpeciesData(countryToDisplay);
                setSpeciesData(data[0]);
            } else if (viewType === 'endangered') {
                const data = getEndangeredData(countryToDisplay);
                setEndangeredData(data[0]);
            }
        }
    }, [countryToDisplay, viewType]);

    const getSpeciesData = (name) => {
        const data = SPECIES_COUNTRIES.filter((country) => country.name === name);
        return data;
    };

    const getEndangeredData = (name) => {
        const data = ENDANGERED_SPECIES.filter((country) => country.name === name);
        return data;
    }

    let title;
    switch (viewType) {
        case 'species':
            title = 'Species Richness';
            break;
        case 'megadiverse':
            title = 'Megadiverse Countries';
            break;
        case 'endangered':
            title = 'Endangered Species';
            break;
        case 'hotspots':
            title = 'Biodiversity Hotspots';
            break;
        default:
            title = 'Info Panel';
    };

    return (
        <Row>
            <span className={showGlobePanel ? 'd-block p-0' : 'd-none'}>
                <Container fluid className='p-0'>
                    <Row>
                        <Col xs='8' className='w-100 mb-2 d-flex justify-content-center justify-content-md-start align-items-center'>
                            <p className='m-0 me-2'>Views:</p>
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
                                color={viewType === 'endangered' ? 'success' : 'secondary'}
                                className='btn-sm rounded-0 me-2'
                                onClick={() => setViewType('endangered')}
                            >
                                Endangered
                            </Button>
                            <Button
                                type='button'
                                color={viewType === 'megadiverse' ? 'success' : 'secondary'}
                                className='btn-sm rounded-0 me-2'
                                onClick={() => setViewType('megadiverse')}
                            >
                                Megadiverse
                            </Button>
                            <small className='text-muted d-none d-md-flex'>More views coming soon!</small>
                        </Col>
                    </Row>
                    <Row>
                        <div ref={rowRef} className='w-100 position-relative p-0'>
                            <InteractiveGlobe
                                setCountryToDisplay={setCountryToDisplay}
                                viewType={viewType}
                                width={width}
                            />
                            <GlobeDataCard
                                countryToDisplay={countryToDisplay}
                                speciesData={speciesData}
                                endangeredData={endangeredData}
                                viewType={viewType}
                                title={title}
                            />
                        </div>
                    </Row>
                </Container>
            </span>
        </Row>
    );
};

export default GlobePanel;