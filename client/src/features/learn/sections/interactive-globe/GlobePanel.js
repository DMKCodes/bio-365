import { useState, useEffect } from 'react';
import {
    Container,
    Col,
    Row,
    Button
} from 'reactstrap';
import InteractiveGlobe from '../../datavis/InteractiveGlobe';
import GlobeInfoCard from './GlobeInfoCard';
import { SPECIES_COUNTRIES } from '../../../../app/shared/SPECIES_COUNTRIES.js';
import { ENDANGERED_SPECIES } from '../../../../app/shared/ENDANGERED_SPECIES';

const GlobePanel = () => {
    const [countryToDisplay, setCountryToDisplay] = useState(null);

    const [speciesData, setSpeciesData] = useState(null);
    const [endangeredData, setEndangeredData] = useState(null);
    const [viewType, setViewType] = useState('species');

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
    }

    return (
        <Container fluid>
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
                    <small className='text-muted'>More views coming soon!</small>
                </Col>
            </Row>
            <Row>
                <Col md='8'>
                    <InteractiveGlobe
                        setCountryToDisplay={setCountryToDisplay}
                        viewType={viewType}
                    />
                </Col>
                <Col md='4'>
                    <GlobeInfoCard
                        countryToDisplay={countryToDisplay}
                        speciesData={speciesData}
                        endangeredData={endangeredData}
                        viewType={viewType}
                        title={title}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default GlobePanel;