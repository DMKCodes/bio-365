import { useState } from 'react';
import {
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText,
    CardHeader,
    CardFooter,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';
import DefinitionTooltip from './DefinitionTooltip';

const InfoCard = ({ countryToDisplay, speciesData, endangeredData, viewType, title }) => {
    const [accordionOpen, setAccordionOpen] = useState([]);

    const toggleAccordion = (id) => {
        if (accordionOpen === id) {
            setAccordionOpen([]);
        } else {
            if (id === undefined) {
                setAccordionOpen([]);
            } else {
                setAccordionOpen(id);
            }
        }
    };

    return (
        <Card className='globe-data-card rounded-0'>
        <CardBody className='text-center'>
            <CardHeader className='mb-3'>
                {countryToDisplay ? (
                    <CardTitle>
                        <h4 className='mb-0'><b>{countryToDisplay.toUpperCase()}</b></h4>
                    </CardTitle>
                ) : (
                    <CardTitle>
                        <small className='text-muted'>
                            <i>Choose a country to learn more.</i>
                        </small>
                    </CardTitle>
                )}
            </CardHeader>
            <CardSubtitle>
                <h4>{title}</h4>
            </CardSubtitle>
            {viewType === 'species' && speciesData ? (
                <CardText>
                    <br />
                    Amphibians: {speciesData.amphibians.toLocaleString('en-US')}<br />
                    Birds: {speciesData.birds.toLocaleString('en-US')}<br />
                    Fish: {speciesData.fish.toLocaleString('en-US')}<br />
                    Mammals: {speciesData.mammals.toLocaleString('en-US')}<br />
                    Reptiles: {speciesData.reptiles.toLocaleString('en-US')}<br />
                    Vascular Plants: {speciesData.vascularPlants.toLocaleString('en-US')}<br />
                    Total: {speciesData.total.toLocaleString('en-US')}<br /><br />
                    <span
                        className='definition'
                        id='gbi-definition'
                    >
                        GBI
                    </span>
                    :{' '}{speciesData.globalBiodiversityIndex}
                    <DefinitionTooltip term='GBI' targetId='gbi-definition' />
                </CardText>
            ) : viewType === 'endangered' && endangeredData ? (
                <CardText>
                    <br />
                    Amphibians: {endangeredData.amphibians.toLocaleString('en-US')}<br />
                    Birds: {endangeredData.birds.toLocaleString('en-US')}<br />
                    Fish: {endangeredData.fish.toLocaleString('en-US')}<br />
                    Mammals: {endangeredData.mammals.toLocaleString('en-US')}<br />
                    Reptiles: {endangeredData.reptiles.toLocaleString('en-US')}<br />
                    Molluscs: {endangeredData.molluscs.toLocaleString('en-US')}<br />
                    Other Invertebrates: {endangeredData.otherInvertebrates.toLocaleString('en-US')}<br />
                    Vascular Plants: {endangeredData.plants.toLocaleString('en-US')}<br />
                    Fungi: {endangeredData.fungi.toLocaleString('en-US')}<br />
                    Total: {endangeredData.total.toLocaleString('en-US')}
                </CardText>
            ) : null}
            </CardBody>
            <CardFooter>
                <Accordion flush open={accordionOpen} toggle={toggleAccordion}>
                    <AccordionItem>
                        <AccordionHeader targetId='1'>
                            Sources
                        </AccordionHeader>
                        <AccordionBody accordionId='1'>
                            <p className='text-center'>
                                <b>Sources: </b><br />
                                <a 
                                    href='https://www.iucnredlist.org/' 
                                    target='blank' 
                                    rel='noreferrer'
                                >
                                    IUCN Red List
                                </a><br />
                                <a
                                    href='https://www.biodiversitya-z.org/'
                                    target='blank' 
                                    rel='noreferrer'
                                >
                                    Biodiversity A-Z
                                </a><br />
                                <a 
                                    href='http://datazone.birdlife.org/country'
                                    target='blank' 
                                    rel='noreferrer'
                                >
                                        BirdLife Data Zone
                                </a><br />
                                <a 
                                    href='https://amphibiaweb.org/'
                                    target='blank' 
                                    rel='noreferrer'
                                >
                                    AmphibiaWeb
                                </a><br />
                                <a 
                                    href='https://reptile-database.reptarium.cz/'
                                    target='blank' 
                                    rel='noreferrer'
                                >
                                    The Reptile Database
                                </a><br />
                                <a 
                                    href='https://theswiftest.com/biodiversity-index/'
                                    target='blank' 
                                    rel='noreferrer'
                                >
                                    The Swiftest
                                </a>
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId='2'>
                            Notes
                        </AccordionHeader>
                        <AccordionBody accordionId='2'>
                            <p className='mt-3 text-center'>
                                All data is based on estimates from trusted third-party sources.
                            </p>
                            <p className='text-center'>
                                The map tool is incomplete, particularly in the Caribbean, and will be improved in the future.
                            </p>
                            <p className='text-center text-muted'>
                                Last updated 19 May 2023.
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </CardFooter>
        </Card>
    );
};

export default InfoCard;