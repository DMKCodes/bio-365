import { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../../hooks/ThemeProvider';
import {
    Container, 
    Row, 
    Col,
    Button,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';
import defineKeywords from '../../../utils/defineKeywords';
import { 
    IMPERVIOUS_STORY_SUMMARY, 
    IMPERVIOUS_STORY_SOURCES 
} from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import authorImg from '../../../app/media/me.png';

const ImperviousSummary = () => {
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
        <Container>
            <Row className='mb-5'>
                <Col lg='8' className='pe-4 mb-5 mb-lg-0'>
                    {IMPERVIOUS_STORY_SUMMARY &&
                        IMPERVIOUS_STORY_SUMMARY.map((content, index) => {
                            return (
                                <Fragment key={`summary-content-${index}`}>
                                    <h5 className='fw-bold'>{content.header}</h5>
                                    <ul>
                                        {content.bullets.map((bullet, index) => {
                                            const textWithKeywords = defineKeywords(bullet);
                                            return (
                                                <li key={`summary-content-text-${index}`} className='mb-2'>{textWithKeywords}</li>
                                            );
                                        })}
                                    </ul>
                                </Fragment>
                            );
                        })
                    }
                </Col>
                <Col lg='4' className='d-flex flex-column align-items-center ps-4'>
                    <h3 className='fw-bold mb-3'>Author</h3>
                    <img 
                        src={authorImg} 
                        alt='headshot of the author' 
                        className='story-author-img rounded-circle border-dark mb-2'
                    />
                    <p className='mb-0'>Douglas Kissack</p>
                    <small>20 Nov 2023</small>

                    <h3 className='fw-bold mb-3 mt-5'>Support</h3>
                    <small className='text-center mb-2 w-75'>
                        If you enjoyed this story, please consider making a donation to Bio365 or one of our suggested conservation groups.
                    </small>
                    <Button color='success' className='rounded-0 mb-3'>
                        <NavLink className='nav-link' to='/donations'>
                            Donations<FontAwesomeIcon icon={faArrowRight} className='ms-2' />
                        </NavLink>
                    </Button>

                    <h3 className='fw-bold mb-3 mt-5'>Sources</h3>
                    {IMPERVIOUS_STORY_SOURCES &&
                        <Accordion 
                            flush 
                            open={accordionOpen} 
                            toggle={toggleAccordion} 
                            className='border-top w-100'
                        >
                            {IMPERVIOUS_STORY_SOURCES.map((item, index) => {
                                return (
                                    <AccordionItem key={`summary-sources-headers-${index}`} className={`${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
                                        <AccordionHeader targetId={`${index}`}>
                                            {item.category}
                                        </AccordionHeader>
                                        <AccordionBody accordionId={`${index}`}>
                                            {item.category === 'Photography' &&
                                                <>
                                                    <div className='mb-3'>
                                                        <small>
                                                            <i>And a special thanks to the public domain and creative commons photographers and resources whose work helps bring this story to life.</i>
                                                        </small>
                                                    </div>
                                                    {item.sources.map((source, index) => {
                                                        return (
                                                            <div key={`summary-sources-${index}`} className='mb-2'>
                                                                <small>{source}</small>
                                                            </div>
                                                        );
                                                    })}
                                                </>
                                            }
                                            {item.sources.map((source, index) => {
                                                return (
                                                    <div key={`summary-sources-names-${index}`} className='mb-3'>
                                                        {source.name &&
                                                            <small className='mb-1'>
                                                                <a
                                                                    href={source.link}
                                                                    target='_blank'
                                                                    rel='noreferrer'
                                                                    key={index}
                                                                >
                                                                    {source.name}<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-1' size='sm' /><br />
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
        </Container>
    );
};

export default ImperviousSummary;