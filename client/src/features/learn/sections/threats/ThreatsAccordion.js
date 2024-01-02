import { useState } from 'react';
import { useTheme } from '../../../../hooks/ThemeProvider';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';
import ExternalButton from '../../../../components/ExternalButton';
import defineKeywords from '../../../../utils/defineKeywords';
import { THREATS_ACCORDION_CONTENT } from '../../../../app/shared/LEARN_CONTENT';

const ThreatsAccordion = () => {
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
        <Accordion flush open={accordionOpen} toggle={toggleAccordion} className='mb-3 text-start'>
            {THREATS_ACCORDION_CONTENT.map((text, index) => {
                const textWithKeywords = defineKeywords(text.body);
                return (
                    <AccordionItem key={`${index}`} className={`${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
                        <AccordionHeader targetId={`${index}`}>
                            {text.header}
                        </AccordionHeader>
                        <AccordionBody accordionId={`${index}`}>
                            {textWithKeywords}
                            {text.link &&
                                <div className='mt-3 mb-2 text-center'>
                                    <ExternalButton link={text.link} />
                                </div>
                            }
                        </AccordionBody>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};



export default ThreatsAccordion;