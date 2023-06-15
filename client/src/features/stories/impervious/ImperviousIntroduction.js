import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Row, Col } from 'reactstrap';
import ChartLine from '../../../components/ChartLine';
import defineKeywords from '../../../utils/defineKeywords';
import { IMPERVIOUS_STORY_MAIN_CONTENT } from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';
import { URBAN_RURAL_POPULATIONS } from '../../../app/shared/URBAN_RURAL_POPULATIONS';

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
            <Col md='7'>
                {showMain &&
                    <div className='story-main-content'>
                        <h3 className='text-center'>
                            Urban & Rural Population Distribution (1960-2020)
                        </h3>
                        <ChartLine data={URBAN_RURAL_POPULATIONS} />
                        <small className='text-muted'>
                            Source: World Bank, based on data from the UN Population Division
                        </small>
                    </div>
                }
            </Col>
        </Row>
    );
};

export default ImperviousIntroduction;