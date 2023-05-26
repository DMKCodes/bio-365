import { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';
import DefinitionTooltip from './DefinitionTooltip';

const ThreatsAccordion = () => {
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
        <Accordion flush open={accordionOpen} toggle={toggleAccordion}>
            <AccordionItem>
                <AccordionHeader targetId='1'>
                    Habitat Loss
                </AccordionHeader>
                <AccordionBody accordionId='1'>
                    <p className='mb-0'>
                        As the effects of global climate change and human interference continue to intensify, the areas wildlife needs to survive and reproduce become more and more compromised. An estimated{' '}
                            <a 
                                href='https://www.sciencedaily.com/releases/2020/11/201106093027.htm' 
                                target='_blank' 
                                rel='noreferrer'
                            >
                                23% of natural habitats
                            </a> 
                        {' '}are projected to be lost by the year 2100.
                    </p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId='2'>
                    Invasive Species
                </AccordionHeader>
                <AccordionBody accordionId='2'>
                    <p className='mb-0'>
                        Non-native plants, animals, and other organisms, most often introduced by humans through travel or trade, can wreak havoc on native wildlife by causing disease or competing for resources.
                    </p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId='3'>
                    Pollution
                </AccordionHeader>
                <AccordionBody accordionId='3'>
                    <p className='mb-0'>
                        When more of a compound enters an 
                            <span id='ecosystem-definition' className='definition'> ecosystem </span>  
                        than can be cycled out, it affects how (or whether) that system can function. One such example is the build up of nutrients like nitrogen and phosphorus in water, which causes a spike in plant growth and starves native wildlife of oxygen, a process known as 
                            <span id='eutrophication-definition' className='definition'> eutrophication</span>
                        .
                    </p>

                    <DefinitionTooltip term='Ecosystem' targetId='ecosystem-definition' />
                    <DefinitionTooltip term='Eutrophication' targetId='eutrophication-definition' />
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId='4'>
                    Human Population
                </AccordionHeader>
                <AccordionBody accordionId='4'>
                    <p className='mb-0'>
                        The human population continues to expand, increasing its demand for resources. 
                            <span id='urbanization-definition' className='definition'> Urbanization</span>
                        , agriculture, and resource extraction have radically altered the global landscape, affecting{' '}
                            <a 
                                href='https://www.nature.com/articles/s41467-021-22702-2' 
                                target='blank' 
                                rel='noreferrer'
                            >
                                almost a third of the world's land surface
                            </a>
                        {' '}since 1960.
                    </p>

                    <DefinitionTooltip term='Urbanization' targetId='urbanization-definition' />
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId='5'>
                    Overharvesting
                </AccordionHeader>
                <AccordionBody accordionId='5'>
                    <p className='mb-0'>
                        When more of a species is harvested than it can reproduce, such as through overfishing or 
                            <span id='deforestation-definition' className='definition'> deforestation</span>
                        , the entire species can be wiped out. This results in major disturbances in 
                            <span id='ecosystem-services-definition' className='definition'> ecosystem services </span>
                        and predator-prey dynamics.
                    </p>

                    <DefinitionTooltip term='Ecosystem Services' targetId='ecosystem-services-definition' />
                    <DefinitionTooltip term='Deforestation' targetId='deforestation-definition' />
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );
};

export default ThreatsAccordion;