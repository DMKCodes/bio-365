import { useState, useEffect } from 'react';
import {
    Card, 
    CardBody, 
    CardTitle, 
    CardText,
    CardHeader,
    CardFooter,
    Tooltip
} from 'reactstrap';
import InfoAccordion from './InfoAccordion';
import defineKeywords from '../../../../utils/defineKeywords';
import { 
    MEGADIVERSE_CONTENT, 
    SPECIES_CONTENT, 
    ENDANGERED_CONTENT 
} from '../../../../app/shared/GLOBE_CONTENT';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faQuestion } from '@fortawesome/free-solid-svg-icons';

const GlobeDataCard = ({ countryToDisplay, speciesData, endangeredData, viewType, title }) => {
    const [expanded, setExpanded] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    useEffect(() => {
        if (countryToDisplay) {
            setExpanded(true);
        }
    }, [countryToDisplay]);

    return (
        <Card className='globe-data-card rounded-0'>
            <CardHeader className='d-flex py-2'>
                <span 
                    className='icon-wrapper d-inline-flex text-light' 
                    id='globe-tooltip'
                    onClick={() => setTooltipOpen(!tooltipOpen)}
                >
                    <FontAwesomeIcon icon={faQuestion} size='xs' />
                </span>
                <Tooltip
                    isOpen={tooltipOpen}
                    target='globe-tooltip'
                    placement='bottom'
                >
                    The globe tool is not optimized for mobile use. Please bear with us as we work on a permanent solution.<br /><br /><b>NOTE</b>: Resizing the screen requires a page refresh to rerender the canvas.
                </Tooltip>
                <h5 className='pf mx-auto mb-0 fw-bold w-100 text-center'>{title}</h5>
                <span 
                    className='icon-wrapper d-inline-flex text-light'
                    onClick={() => setExpanded(!expanded)}
                >
                    <FontAwesomeIcon icon={expanded ? faMinus : faPlus} size='xs' />
                </span>
            </CardHeader>
            <CardBody className='text-center p-1'>
                <CardTitle className={expanded ? 'd-none' : 'my-2'}>
                    <small className='text-muted'>
                        <i>Pick a country on the globe to learn more.</i>
                    </small>
                </CardTitle>
                <CardText className={expanded ? 'd-block px-2 pt-2' : 'd-none'}>
                    {countryToDisplay && viewType !== 'megadiverse' &&
                        <span className='pf d-block h5 mb-2'>
                            <b>{countryToDisplay.toUpperCase()}</b>
                        </span>
                    }
                    {viewType === 'species' && speciesData ? (
                        <span>
                            Animals: {speciesData.animalSpecies.toLocaleString('en-US')}<br />
                            Plants: {speciesData.plantSpecies.toLocaleString('en-US')}<br />
                            Fungi: {speciesData.fungusSpecies.toLocaleString('en-US')}<br />
                            Chromists: {speciesData.chromistSpecies.toLocaleString('en-US')}<br /><br />
                            Total: {speciesData.totalSpecies.toLocaleString('en-US')}<br /><br />

                            {SPECIES_CONTENT.map((text, index) => {
                                const textWithKeywords = defineKeywords(text);
                                return <span key={index}>{textWithKeywords}</span>;
                            })}

                            <small className='d-block mt-3'>
                                <i>Darker green indicates a higher number of unique species.</i>
                            </small>
                        </span>
                    ) : viewType === 'endangered' && endangeredData ? (
                        <span>
                            Amphibians: {endangeredData.amphibians.toLocaleString('en-US')}<br />
                            Birds: {endangeredData.birds.toLocaleString('en-US')}<br />
                            Fish: {endangeredData.fish.toLocaleString('en-US')}<br />
                            Mammals: {endangeredData.mammals.toLocaleString('en-US')}<br />
                            Reptiles: {endangeredData.reptiles.toLocaleString('en-US')}<br />
                            Molluscs: {endangeredData.molluscs.toLocaleString('en-US')}<br />
                            Other Invertebrates: {endangeredData.otherInvertebrates.toLocaleString('en-US')}<br />
                            Vascular Plants: {endangeredData.plants.toLocaleString('en-US')}<br />
                            Fungi: {endangeredData.fungi.toLocaleString('en-US')}<br /><br />
                            Total: {endangeredData.total.toLocaleString('en-US')}<br /><br />
                            
                            {ENDANGERED_CONTENT.map((text, index) => {
                                const textWithKeywords = defineKeywords(text);
                                return <span key={index}>{textWithKeywords}</span>;
                            })}

                            <small className='d-block mt-3'>
                                <i>Darker red indicates a higher ratio of endangered to total species.</i>
                            </small>
                        </span>
                    ) : viewType === 'megadiverse' ? (
                        <span>
                            {MEGADIVERSE_CONTENT.map((text, index) => {
                                const textWithKeywords = defineKeywords(text);
                                return <span key={index}>{textWithKeywords}</span>;
                            })}

                            <small className='d-block mt-3'>
                                <i>Countries in brown are considered megadiverse.</i>
                            </small>
                        </span>
                    ) : null}
                </CardText>
            </CardBody>
            <CardFooter className={expanded ? 'd-block' : 'd-none'}>
                <InfoAccordion />
            </CardFooter>
        </Card>
    );
};

export default GlobeDataCard;