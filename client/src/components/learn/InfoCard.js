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
                    <CardHeader className='mb-3 rounded-0 border'>
                        <h4>{title}</h4>

                    </CardHeader>
                <CardSubtitle>
                    {countryToDisplay ? (
                        <CardTitle>
                            <h5 className='mb-0'><b>{countryToDisplay.toUpperCase()}</b></h5>
                        </CardTitle>
                    ) : (
                        <CardTitle>
                            <small className='text-muted'>
                                <i>Choose a country to learn more.</i>
                            </small>
                        </CardTitle>
                    )}
                </CardSubtitle>
                {viewType === 'species' && speciesData ? (
                    <CardText>
                        <br />
                        Animals: {speciesData.animalSpecies.toLocaleString('en-US')}<br />
                        Plants: {speciesData.plantSpecies.toLocaleString('en-US')}<br />
                        Fungi: {speciesData.fungusSpecies.toLocaleString('en-US')}<br />
                            <span id='chromista-definition' className='definition'>
                                Chromists
                            </span>
                        : {speciesData.chromistSpecies.toLocaleString('en-US')}<br /><br />
                        Total: {speciesData.totalSpecies.toLocaleString('en-US')}<br /><br />

                        <DefinitionTooltip term='Chromista' targetId='chromista-definition' />
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
                        Fungi: {endangeredData.fungi.toLocaleString('en-US')}<br /><br />
                        Total: {endangeredData.total.toLocaleString('en-US')}
                        <br /><br />
                        <small className='text-muted'>Color depicts ratio of endangered species to total species. This is not a statement on any country's individual conservation efforts or unique challenges.</small>
                    </CardText>
                ) : viewType === 'megadiverse' ? (
                    <CardText>
                        The world's most biodiversity-rich countries, which together account for more than two-thirds of all non-fish vertebrate species and three quarters of all higher plant species.
                        <br /><br />
                        To qualify as 
                            <span id='megadiverse-definition' className='definition'> megadiverse</span>
                        , a country must have:
                        <br />
                        - at least 5,000 of the world's plants as{' '}
                        <span id='endemics-definition' className='definition'>
                            endemics
                        </span>
                        <br />
                        - marine{' '}
                        <span id='ecosystem-definition' className='definition'>
                            ecosystems
                        </span>
                        {' '}within its borders
                        <br /><br />
                        In accordance with the{' '}
                            <span id='iucn-definition' className='definition'>
                                IUCN's 
                            </span>
                        {' '}doctrine of ultimate responsibility, these 17 countries bear the disproportionate burden of ensuring the survival of their endemic species.
                        <DefinitionTooltip term='Endemism' targetId='endemics-definition' />
                        <DefinitionTooltip term='Ecosystem' targetId='ecosystem-definition' />
                        <DefinitionTooltip term='IUCN' targetId='iucn-definition' />
                        <DefinitionTooltip term='Megadiverse Countries' targetId='megadiverse-definition' />
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
                            </p>
                            <br />
                            <small className='text-muted'>
                                Map tool created by{' '}
                                <a 
                                    href='https://github.com/vasturiano'
                                    target='blank' 
                                    rel='noreferrer'
                                >
                                    Vasco Asturiano
                                </a>
                                .
                            </small>
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
                            <small className='text-muted'>
                                Last updated 22 May 2023.
                            </small>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </CardFooter>
        </Card>
    );
};

export default InfoCard;