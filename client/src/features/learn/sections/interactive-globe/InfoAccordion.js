import { useState } from 'react';
import { useTheme } from '../../../../hooks/ThemeProvider';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';

const InfoAccordion = () => {
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
        <Accordion flush open={accordionOpen} toggle={toggleAccordion}>
            <AccordionItem className={`${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
                <AccordionHeader targetId='1'>
                    Sources
                </AccordionHeader>
                <AccordionBody accordionId='1'>
                    <p>
                        <b>Sources: </b><br />
                        <a 
                            href='https://www.iucnredlist.org/' 
                            target='blank' 
                            rel='noreferrer'
                        >
                            IUCN Red List
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
            <AccordionItem className={`${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
                <AccordionHeader targetId='2'>
                    Notes
                </AccordionHeader>
                <AccordionBody accordionId='2'>
                    <p>
                        All data is based on estimates from trusted third-party sources.
                    </p>
                    <p>
                        The map tool is incomplete, particularly in the Caribbean, and will be improved in the future.
                    </p>
                    <small className='text-muted'>
                        Data last updated: 27 Sep 2023
                    </small>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    );
};

export default InfoAccordion;