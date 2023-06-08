import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Row, Col } from 'reactstrap';
import defineKeywords from '../../../utils/defineKeywords';
import { IMPERVIOUS_STORY_MAIN_CONTENT } from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';

const ImperviousIntroduction = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);
    const [showMain, setShowMain] = useState(true);

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);

        if (currentStepIndex === 3) {
            setShowMain(true);
        }
    };

    const onStepExit = ({ direction }) => {
        if (currentStepIndex === 3 && direction === 'down') {
            setShowMain(false);
        } else return;
    };

    return (
        <Row>
            <Col md='5'>
                <div className='story-side-content'>
                    <Scrollama 
                        offset={0.5} 
                        onStepEnter={onStepEnter} 
                        onStepExit={onStepExit} 
                        debug
                    >
                        {IMPERVIOUS_STORY_MAIN_CONTENT &&
                            IMPERVIOUS_STORY_MAIN_CONTENT.map((content, index) => {
                                return (
                                    <Step data={index}>
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
                        <Step data={1}>
                            <div className='story-step'>
                                <h5 className='text-center text-uppercase fw-bold mt-5'>
                                    What are impervious surfaces?
                                </h5>
                                <p className='text-center mx-5 mb-5'>
                                    Impervious surfaces are human-made, artificial structures covered by impenetrable materials, such as asphalt, concrete, brick, or stone.
                                </p>
                            </div>
                        </Step>
                    </Scrollama>
                </div>
            </Col>
            <Col md='7'>
                {showMain &&
                    <div className='story-main-content'>

                    </div>
                }
            </Col>
        </Row>
    );
};

export default ImperviousIntroduction;