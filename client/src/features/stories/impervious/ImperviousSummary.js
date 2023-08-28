import { useState, Fragment } from 'react';
import { 
    Row, 
    Col,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';
import Donations from '../../../components/Donations';
import defineKeywords from '../../../utils/defineKeywords';
import { 
    IMPERVIOUS_STORY_SUMMARY, 
    IMPERVIOUS_STORY_SOURCES 
} from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';

const ImperviousSummary = () => {
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
        <>
            <Row className='mb-5'>
                <Col lg='8' className='pe-4'>
                    <h3 className='fw-bold text-center mb-3'>TL;DR</h3>
                    {IMPERVIOUS_STORY_SUMMARY &&
                        IMPERVIOUS_STORY_SUMMARY.map((content, index) => {
                            return (
                                <Fragment key={index}>
                                    <h5 className='fw-bold'>{content.header}</h5>
                                    <ul>
                                        {content.bullets.map((bullet, index) => {
                                            const textWithKeywords = defineKeywords(bullet);
                                            return (
                                                <li className='mb-2' key={index}>{textWithKeywords}</li>
                                            );
                                        })}
                                    </ul>
                                </Fragment>
                            );
                        })
                    }
                </Col>
                <Col lg='4' className='d-flex flex-column align-items-center ps-4'>
                    <h3 className='fw-bold mb-3'>Support</h3>
                    <Donations />
                    <small className='text-center mb-2 w-75'>
                        If you enjoyed this story, please consider donating directly. Proceeds keep us online and any excess goes to biodiversity conservation and research.
                    </small>
                    <small className='text-center mb-5 w-75'>
                        You can also donate directly to <a href='https://www.charitynavigator.org/discover-charities/best-charities/protect-environment/' target='_blank' rel='noreferrer'>conservation groups</a>.
                    </small>

                    <h3 className='fw-bold mb-3'>Sources</h3>
                    {IMPERVIOUS_STORY_SOURCES &&
                        <Accordion 
                            flush 
                            open={accordionOpen} 
                            toggle={toggleAccordion} 
                            className='border-top w-100'
                        >
                            {IMPERVIOUS_STORY_SOURCES.map((item, index) => {
                                return (
                                    <AccordionItem key={index}>
                                        <AccordionHeader targetId={index}>
                                            {item.category}
                                        </AccordionHeader>
                                        <AccordionBody accordionId={index}>
                                            {item.category === 'Photography' &&
                                                <>
                                                    <div className='mb-3'>
                                                        <small>
                                                            <i>And a special thanks to the public domain and creative commons photographers and resources whose work helps bring this story to life.</i>
                                                        </small>
                                                    </div>
                                                    {item.sources.map((source, index) => {
                                                        return (
                                                            <div key={index} className='mb-2'>
                                                                <small>{source}</small>
                                                            </div>
                                                        );
                                                    })}
                                                </>
                                            }
                                            {item.sources.map((source, index) => {
                                                return (
                                                    <div key={index} className='mb-3'>
                                                        {source.name &&
                                                            <small className='mb-1'>
                                                                <a
                                                                    href={source.link}
                                                                    target='_blank'
                                                                    rel='noreferrer'
                                                                    key={index}
                                                                >
                                                                    {source.name}<br />
                                                                </a>
                                                            </small>
                                                        }
                                                        {source.authors &&
                                                            <small>Authors: <i>{source.authors}</i></small>
                                                        }
                                                    </div>
                                                );
                                            })}
                                        </AccordionBody>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    }
                </Col>
            </Row>
        </>
    );
};

export default ImperviousSummary;