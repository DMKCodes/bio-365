import { useState } from 'react';
import {
    Card, 
    CardBody, 
    CardTitle, 
    CardHeader,
    CardFooter,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';
import ExternalButton from '../../../../components/ExternalButton';
import defineKeywords from '../../../../utils/defineKeywords';
import { SPECIES_SPOTLIGHT_CONTENT } from '../../../../app/shared/LEARN_CONTENT';

const SpeciesSpotlightCard = () => {
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
        <Card className='rounded-0'>
            <iframe width={'100%'} height='250' src='https://www.youtube.com/embed/_cBgz2eud64' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            <CardBody className='d-flex justify-content-center'>
                <CardHeader className='mb-0 rounded-0 border w-75'>
                    <CardTitle className='mb-0'>
                        <h5 className='mb-0 fw-bold'>Giant Panda</h5>
                        <small className='text-muted'>(Ailuropoda melanoleuca)</small>
                    </CardTitle>
                </CardHeader>
            </CardBody>

            <Accordion 
                flush 
                open={accordionOpen} 
                toggle={toggleAccordion} 
                className='border-top text-start'
            >
                {SPECIES_SPOTLIGHT_CONTENT.map((text, index) => {
                    const textWithKeywords = defineKeywords(text.body);
                    return (
                        <AccordionItem key={index}>
                            <AccordionHeader targetId={`${index}`}>
                                {text.header}
                            </AccordionHeader>
                            <AccordionBody accordionId={`${index}`}>
                                {textWithKeywords}
                            </AccordionBody>
                        </AccordionItem>
                    );
                })}
            </Accordion>

            <CardFooter className='py-3'>
                <ExternalButton link={'https://www.worldwildlife.org/species/giant-panda'} />
            </CardFooter>
        </Card>
    );
};

export default SpeciesSpotlightCard;