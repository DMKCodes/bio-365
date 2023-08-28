import { useState } from 'react';
import {
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle,
    CardHeader,
    CardFooter,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';
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
            <iframe width={'100%'} height='233' src='https://www.youtube.com/embed/_cBgz2eud64' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullscreen />
            <CardBody className='text-center'>
                <CardHeader className='mb-0 rounded-0 border'>
                    <CardTitle>
                        <h5 className='text-uppercase'>Conservation Spotlight</h5>
                    </CardTitle>
                    <CardSubtitle>
                        Giant Panda<br />
                        <small className='text-muted'>(Ailuropoda melanoleuca)</small>
                    </CardSubtitle>
                </CardHeader>
            </CardBody>
            <Accordion 
                flush 
                open={accordionOpen} 
                toggle={toggleAccordion} 
                className='border-top'
            >
                {SPECIES_SPOTLIGHT_CONTENT.map((text, index) => {
                    const textWithKeywords = defineKeywords(text.body);
                    return (
                        <AccordionItem key={index}>
                            <AccordionHeader targetId={index}>
                                {text.header}
                            </AccordionHeader>
                            <AccordionBody accordionId={index}>
                                {textWithKeywords}
                            </AccordionBody>
                        </AccordionItem>
                    );
                })}
            </Accordion>
            <CardFooter>
                <small className='text-muted'>
                    <a 
                        href='https://www.worldwildlife.org/species/giant-panda' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        Read more at WWF...
                    </a>
                </small>
            </CardFooter>
        </Card>
    );
};

export default SpeciesSpotlightCard;