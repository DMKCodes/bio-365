import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Row, Col } from 'reactstrap';
import defineKeywords from '../../../utils/defineKeywords';
import { IMPERVIOUS_STORY_THREATS_CONTENT } from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';

const ImperviousThreats = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
    };

    const onStepExit = ({ direction }) => {
        return;
    };

    return (
        <Row>
            <Col md='7' className='story-main'>
                <div className='story-main-content d-flex justify-content-center'>
                    <span className='d-flex flex-column'>
                        <small className='text-muted text-center'>
                            Image Source: Stormwater Shepherds
                        </small>
                    </span>
                </div>
            </Col>
            <Col md='5'>
                <div className='story-side-content'>
                    <Scrollama 
                        offset={0.5} 
                        onStepEnter={onStepEnter} 
                        onStepExit={onStepExit}
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