import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Container, Col, Row, Button, Tooltip } from 'reactstrap';
import InteractiveGlobe from './InteractiveGlobe';
import GlobeInfoCard from './GlobeInfoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { SPECIES_COUNTRIES } from '../../../../app/shared/SPECIES_COUNTRIES.js';
import { ENDANGERED_SPECIES } from '../../../../app/shared/ENDANGERED_SPECIES';

const GlobePanel = () => {
    const [countryToDisplay, setCountryToDisplay] = useState(null);
    const [speciesData, setSpeciesData] = useState(null);
    const [endangeredData, setEndangeredData] = useState(null);
    const [viewType, setViewType] = useState('species');
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const colRef = useRef(null);
    const [width, setWidth] = useState(0);
    console.log(width);

    useLayoutEffect(() => {
        setWidth(colRef.current.offsetWidth);
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
                    <small className='text-muted d-none d-md-flex'>More views coming soon!</small>
                </Col>
            </Row>
            <Row>
                <Col lg='9' className='d-flex align-items-center px-0 mb-1 mb-md-0'>
                    <div ref={colRef} className='w-100 position-relative'>
                        <InteractiveGlobe
                            setCountryToDisplay={setCountryToDisplay}
                            viewType={viewType}
                            width={width}
                        />
                        <Button
                            outline
                            color='light'
                            className='globe-notes rounded-circle'
                            id='globe-tooltip'
                            onClick={() => setTooltipOpen(!tooltipOpen)}
                        >
                            <FontAwesomeIcon icon={faQuestion} />
                        </Button>
                        <Tooltip
                            isOpen={tooltipOpen}
                            target='globe-tooltip'
                            placement='left'
                        >
                            The globe tool is not optimized for use on small screens. Please bear with us as we work on a permanent solution.<br /><br /><b>NOTE</b>: Resizing the screen requires a page refresh to rerender the canvas.
                        </Tooltip>
                    </div>
                </Col>
                <Col lg='3'>
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