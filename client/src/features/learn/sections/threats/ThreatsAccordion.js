import { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';
import defineKeywords from '../../../../utils/defineKeywords';
import { THREATS_ACCORDION_CONTENT } from '../../../../app/shared/LEARN_CONTENT';

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
            {THREATS_ACCORDION_CONTENT.map((text, index) => {
                const textWithKeywords = defineKeywords(text.body);
                return (
                    <AccordionItem key={`${index}`}>
                        <AccordionHeader targetId={index}>
                            {text.header}
                        </AccordionHeader>
                        <AccordionBody accordionId={index}>
                            {textWithKeywords}
                            {text.link &&
                                <a
                                    href={text.link}
                                    target='blank'
                                    rel='noreferrer'
                                >
                                    [...]
                                </a>
                            }
                        </AccordionBody>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};



export default ThreatsAccordion;