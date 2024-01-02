import { useState } from 'react';
import { useTheme } from '../../../../hooks/ThemeProvider';
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
import YoutubeEmbed from '../../../../components/YoutubeEmbed';
import defineKeywords from '../../../../utils/defineKeywords';
import { SPECIES_SPOTLIGHT_CONTENT } from '../../../../app/shared/LEARN_CONTENT';

const SpeciesSpotlightCard = () => {
    const { mode } = useTheme();

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
            <YoutubeEmbed id={'_cBgz2eud64'} />
            <CardBody className={`d-flex justify-content-center ${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
                <CardHeader className={`mb-0 rounded-0 border w-75 text-center ${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
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
                        <AccordionItem key={index} className={`${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
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

            <CardFooter className={`py-3 text-center ${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
                <ExternalButton link={'https://www.worldwildlife.org/species/giant-panda'} />
            </CardFooter>
        </Card>
    );
};

export default SpeciesSpotlightCard;