import { useState, Fragment } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Row, Col } from 'reactstrap';
import Quote from '../../../components/Quote';
import ExternalButton from '../../../components/ExternalButton';
import ChartBar from '../../../components/ChartBar';
import YoutubeEmbed from '../../../components/YoutubeEmbed';
import defineKeywords from '../../../utils/defineKeywords';
import { 
    IMPERVIOUS_STORY_SOLUTIONS_CONTENT, 
    IMPERVIOUS_STORY_SOLUTIONS_MEDIA 
} from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';

const ImperviousSolutions = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);

    const onStepEnter = ({ data }) => {
        console.log(currentStepIndex);
        setCurrentStepIndex(data);
    };

    const onStepExit = () => {
        return;
    };

    return (
        <Row className='d-flex justify-content-center'>
            <Col lg='6' xxl='5'>
                <div className='story-main-content'>
                    <Scrollama 
                        offset={0.5} 
                        onStepEnter={onStepEnter} 
                        onStepExit={onStepExit}
                    >
                        {IMPERVIOUS_STORY_SOLUTIONS_CONTENT &&
                            IMPERVIOUS_STORY_SOLUTIONS_CONTENT.map((content, index) => {
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
                                                <ExternalButton link={content.link} />
                                            }
                                            {content.quote &&
                                                <Quote quote={content.quote} source={content.quoteSource} />
                                            }
                                        </div>
                                    </Step>
                                );
                            })
                        }
                    </Scrollama>
                </div>
            </Col>
            <Col lg='6' xxl='5' className='story-main'>
                <div className='story-media-content d-flex justify-content-center'>
                    {IMPERVIOUS_STORY_SOLUTIONS_MEDIA &&
                        IMPERVIOUS_STORY_SOLUTIONS_MEDIA.filter((content) => currentStepIndex === content.index)
                        .map((content) => {
                            return (
                                <Fragment key={content.index}>
                                    {currentStepIndex === content.index ? (
                                        <div className='d-flex flex-column align-items-center w-100 h-100'>
                                            {content.image ? (
                                                <img
                                                    src={content.image}
                                                    alt={content.alt}
                                                    className='img-fluid mb-2'
                                                />
                                            ) : content.video ? (
                                                <YoutubeEmbed id={content.video} />
                                            ) : content.chart && content.chartType === 'bar' ? (
                                                <Fragment>
                                                    <h3 className='text-center'>{content.chartTitle}</h3>
                                                    <ChartBar data={content.chartData} />
                                                </Fragment>
                                            ) : null}
            
                                            <small className='text-muted text-center mb-2'>
                                                Source: {content.source}
                                            </small>
                                            {content.caption &&
                                                <small className='text-center story-caption'>
                                                    {content.caption}
                                                </small>
                                            }
                                        </div>
                                    ) : null}
                                </Fragment>
                            );
                        })
                    }
                </div>
            </Col>
        </Row>
    );
};

export default ImperviousSolutions;