import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Row, Col } from 'reactstrap';
import StoryQuote from '../StoryQuote';
import defineKeywords from '../../../utils/defineKeywords';
import { IMPERVIOUS_STORY_THREATS_CONTENT } from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';
import waterTableDiagram from '../../../app/media/water-table-diagram2.png';
import groundwaterWetland from '../../../app/media/groundwater-wetland.jpg';
import groundwaterIrrigation from '../../../app/media/groundwater-irrigation.jpg';
import bilithu from '../../../app/media/bilithu.jpg'
import runoffTable from '../../../app/media/runoff-coefficient.png';
import redTide from '../../../app/media/red-tide.jpg';

const ImperviousThreats = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
    };

    return (
        <Row>
            <Col md='7' className='story-main px-0'>
                <div className='story-main-content d-flex justify-content-center'>
                    <span className='d-flex flex-column'>
                        {currentStepIndex === 0 ? (
                            <span className='d-flex flex-column align-items-center'>
                                <img 
                                    src={waterTableDiagram} 
                                    alt='water table diagram' 
                                    className='story-main-image mb-2' 
                                />
                                <small className='text-muted text-center'>
                                    Image Source: Public Domain
                                </small>
                            </span>
                        ) : currentStepIndex === 1 ? (
                            <span className='d-flex flex-column align-items-center'>
                                <img 
                                    src={groundwaterWetland} 
                                    alt='groundwater wetland' 
                                    className='story-main-image mb-2' 
                                />
                                <small className='text-muted text-center'>
                                    Image Source: Ashwini Chaudhary
                                </small>
                            </span>
                        ) : currentStepIndex === 2 ? (
                            <span className='d-flex flex-column align-items-center'>
                                <img 
                                    src={bilithu} 
                                    alt='water table diagram' 
                                    className='story-main-image mb-2' 
                                />
                                <small className='text-muted text-center'>
                                    Image Source: Wikimedia Commons<br /><br />
                                    Yinderitu, in Mongolian <i>The Place Without Steps</i>, is the largest salt lake in the Badain Jaran Desert in China. Locally, it is referred to as Shenquan, or <i>Divine Spring</i>. This lake contains 108 springs, fed by groundwater, that provide both refreshment and cultural significance to locals and visitors alike.
                                </small>
                            </span>
                        ) : currentStepIndex === 3 ? (
                            <span className='d-flex flex-column align-items-center'>
                                <img 
                                    src={groundwaterIrrigation} 
                                    alt='groundwater irrigation' 
                                    className='story-main-image mb-2' 
                                />
                                <small className='text-muted text-center'>
                                    Image Source: wilsanphotography
                                </small>
                            </span>
                        ) : currentStepIndex === 4 ? (
                            <span className='d-flex flex-column align-items-center'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ft7s7y-f8Q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <small className='text-muted text-center mt-2'>
                                    Video Source: United States Geological Survey
                                </small>
                            </span>
                        ) : currentStepIndex === 5 ? (
                            <span className='d-flex flex-column align-items-center'>
                                <p><b>Table 1. Runoff coefficients for the Rational Method</b></p>
                                <img 
                                    src={runoffTable} 
                                    alt='table of runoff coefficients' 
                                    className='story-main-image mb-2' 
                                />
                                <small className='text-muted text-center'>
                                    Source: Iowa Department of Transportation, 1995-2023
                                </small>
                            </span>
                        ) : currentStepIndex === 6 ? (
                            <span className='d-flex flex-column align-items-center'>
                                <img 
                                    src={redTide} 
                                    alt='florida red tide warning' 
                                    className='story-main-image mb-2' 
                                />
                                <small className='text-muted text-center'>
                                    Image Source: Florida Guidebook
                                </small>
                            </span>
                        ) : null}
                    </span>
                </div>
            </Col>
            <Col md='5'>
                <div className='story-side-content'>
                    <Scrollama 
                        offset={0.5} 
                        onStepEnter={onStepEnter}
                        debug
                    >
                        {IMPERVIOUS_STORY_THREATS_CONTENT &&
                            IMPERVIOUS_STORY_THREATS_CONTENT.map((content, index) => {
                                return (
                                    <Step data={index} key={index}>
                                        <div className='story-step py-3 text-center'>
                                            <h5 className='text-uppercase fw-bold'>
                                                {content.header}
                                            </h5>
                                            {content.body.map((text, index) => {
                                                const textWithKeywords = defineKeywords(text);
                                                return (
                                                    <p className='mx-5' key={index}>
                                                        {textWithKeywords}
                                                    </p>
                                                )
                                            })}
                                            {content.quote &&
                                                <StoryQuote quote={content.quote} source={content.quoteSource} />
                                            }
                                            {content.note &&
                                                <small className='text-muted'>
                                                    Note: {content.note}<br /><br />
                                                </small>
                                            }
                                            {content.link &&
                                                <small className='text-muted'>
                                                    <a 
                                                        href={content.link}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                    >
                                                        Read more...
                                                    </a>
                                                </small>
                                            }
                                        </div>
                                    </Step>
                                );
                            })
                        }
                    </Scrollama>
                </div>
            </Col>
        </Row>
    );
};

export default ImperviousThreats;