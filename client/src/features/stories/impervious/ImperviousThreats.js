import { useState, Fragment } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Row, Col, Button } from 'reactstrap';
import ChartBar from '../../../components/ChartBar';
import ExternalButton from '../../../components/ExternalButton';
import defineKeywords from '../../../utils/defineKeywords';
import { 
    IMPERVIOUS_STORY_THREATS_CONTENT,
    IMPERVIOUS_STORY_THREATS_MEDIA
} from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';

const ImperviousThreats = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
    };

    return (
        <Row>
            <Col md='7' className='story-main px-5'>
                <div className='story-main-content d-flex justify-content-center'>
                    {IMPERVIOUS_STORY_THREATS_MEDIA &&
                        IMPERVIOUS_STORY_THREATS_MEDIA.filter((content) => currentStepIndex === content.index)
                        .map((content) => {
                            return (
                                <Fragment key={content.index}>
                                    {currentStepIndex === content.index ? (
                                        <span className='d-flex flex-column align-items-center'>
                                                {content.image ? (
                                                    <img
                                                        src={content.image}
                                                        alt={content.alt}
                                                        className='story-main-image mb-2'
                                                    />
                                                ) : content.video ? (
                                                    <iframe width='560' height='315' src={content.video} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
                                                ) : content.chart && content.chartType === 'bar' ? (
                                                    <Fragment>
                                                        <h3 className='text-center'>{content.chartTitle}</h3>
                                                        <ChartBar data={content.chartData} />
                                                    </Fragment>
                                                ) : null}
                
                                                <small className='text-muted mb-2'>
                                                    Source: {content.source}
                                                </small>
                                                {content.caption &&
                                                    <small className='text-center story-caption'>
                                                        {content.caption}
                                                    </small>
                                                }
                                        </span>
                                    ) : null}
                                </Fragment>
                            );
                        })
                    }
                </div>
            </Col>
            <Col md='5'>
                <div className='story-side-content'>
                    <Scrollama 
                        offset={0.5} 
                        onStepEnter={onStepEnter}
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
                                                <ExternalButton link={content.link} />
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