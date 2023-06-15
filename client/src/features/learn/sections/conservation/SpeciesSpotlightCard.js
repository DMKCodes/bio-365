import { useState, useRef } from 'react';
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
    AccordionItem,
    Row,
    Col
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import defineKeywords from '../../../../utils/defineKeywords';
import { SPECIES_SPOTLIGHT_CONTENT } from '../../../../app/shared/LEARN_CONTENT';
import giantpandavid from '../../../../app/media/giant-panda.mp4';

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

    const vidRef = useRef(null);

    const playVid = () => {
        vidRef.current.play();
    };

    const pauseVid = () => {
        vidRef.current.pause();
    };

    return (
        <Card>
            <video 
                playsInline 
                muted 
                loop 
                ref={vidRef} 
                onMouseEnter={playVid} 
                onMouseLeave={pauseVid}
            >
                <source src={giantpandavid} type='video/mp4' />
            </video>
            <Row className='mt-1'>
                <Col xs='6' className='ps-3 text-start'>
                    <FontAwesomeIcon icon={faArrowUp} size='xs' bounce />
                    <small className='text-muted ms-1'>Hover me!</small>
                </Col>
                <Col xs='6' className='pe-3 text-end'>
                    <small className='text-muted me-1'>Video Credit: Iyan Darmawan</small>
                </Col>
            </Row>
            <CardBody className='text-center'>
                <CardHeader className='mb-3 rounded-0 border'>
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
                        <AccordionItem key={`${index}`}>
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
            <CardFooter>
                <Row>
                    <small className='text-muted text-start'>
                        <a 
                            href='https://www.worldwildlife.org/species/giant-panda' 
                            target='_blank' 
                            rel='noreferrer'
                        >
                            Read more at WWF...
                        </a>
                    </small>
                </Row>
            </CardFooter>
        </Card>
    );
};

export default SpeciesSpotlightCard;