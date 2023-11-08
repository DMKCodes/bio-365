import { useState, Fragment } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Container, Row, Col } from 'reactstrap';
import ChartLine from '../../../components/ChartLine';
import ChartBar from '../../../components/ChartBar';
import ExternalButton from '../../../components/ExternalButton';
import YoutubeEmbed from '../../../components/YoutubeEmbed';
import defineKeywords from '../../../utils/defineKeywords';
import { IMPERVIOUS_STORY_INTRO_CONTENT } from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';
import { URBAN_RURAL_POPULATIONS, CHART_YEARS } from '../../../app/shared/URBAN_RURAL_POPULATIONS';

const ImperviousIntroduction = ({ isMobileView }) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [chartData, setChartData] = useState(URBAN_RURAL_POPULATIONS.filter((item) => item.name === 1960));

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);

        if (data === 3) {
            setChartData(URBAN_RURAL_POPULATIONS.filter((item) => item.name === 1960));
        } else if (data === 4) {
            setChartData(URBAN_RURAL_POPULATIONS.filter((item) => item.name <= 2007));
        } else if (data === 5) {
            setChartData(URBAN_RURAL_POPULATIONS);
        }
    };

    return (
        <Container fluid>
            {isMobileView ? (
                <div className='text-center'>
                    {IMPERVIOUS_STORY_INTRO_CONTENT &&
                        IMPERVIOUS_STORY_INTRO_CONTENT.map((content) => {
                            return (
                                <Row key={content.index} className='story-mobile-row'>
                                    <h5 className='text-uppercase fw-bold'>
                                        {content.text.header}
                                    </h5>
                                    {content.text.body.map((text, index) => {
                                        const textWithKeywords = defineKeywords(text);
                                        return (
                                            <p key={index}>
                                                {textWithKeywords}
                                            </p>
                                        )
                                    })}
                                    <div className='mt-3 px-0'>
                                        {content.media.image ? (
                                            <img
                                                src={content.media.image}
                                                alt={content.alt}
                                                className='img-fluid mb-2'
                                            />
                                        ) : content.media.video ? (
                                            <YoutubeEmbed id={content.media.video} />
                                        ) : content.media.chart && content.media.chartType === 'line' ? (
                                            <div className='story-chart'>
                                                <h3>{content.media.chartTitle}</h3>
                                                {content.media.chartSubtitle &&
                                                    <p><i>{content.media.chartSubtitle}</i></p>
                                                }
                                                <ChartLine data={content.media.chartMobileData} ticks={CHART_YEARS} />
                                            </div>
                                        ) : content.media.chart && content.media.chartType === 'bar' ? (
                                            <div className='story-chart'>
                                                <h3>{content.media.chartTitle}</h3>
                                                {content.media.chartSubtitle &&
                                                    <p><i>{content.media.chartSubtitle}</i></p>
                                                }
                                                <ChartBar data={content.media.chartData} />
                                            </div>
                                        ) : null}
                                        <div>
                                            <small className='text-muted mb-2'>
                                                Source: {content.media.source}
                                            </small>
                                        </div>
                                        {content.media.caption &&
                                            <div>
                                                <small className='story-caption'>
                                                    {content.media.caption}
                                                </small>
                                            </div>
                                        }
                                        {content.text.link &&
                                            <div className='mt-3'>
                                                <ExternalButton link={content.text.link} />
                                            </div>
                                        }
                                    </div>
                                </Row>
                            );
                        })
                    }
                </div>
            ) : (
                <Row className='d-flex justify-content-center'>
                    <Col lg='6'>
                        <div className='story-main-content'>
                            <Scrollama offset={0.5} onStepEnter={onStepEnter}>
                                {IMPERVIOUS_STORY_INTRO_CONTENT &&
                                    IMPERVIOUS_STORY_INTRO_CONTENT.map((content) => {
                                        return (
                                            <Step data={content.index} key={content.index}>
                                                <div className='story-step py-3 text-center'>
                                                    <h5 className='text-uppercase fw-bold'>
                                                        {content.text.header}
                                                    </h5>
                                                    {content.text.body.map((text) => {
                                                        const textWithKeywords = defineKeywords(text);

                                                        return (
                                                            <p className='mx-5' key={content.index}>
                                                                {textWithKeywords}
                                                            </p>
                                                        );
                                                    })}
                                                    {content.text.link &&
                                                        <ExternalButton link={content.text.link} />
                                                    }
                                                </div>
                                            </Step>
                                        );
                                    })
                                }
                            </Scrollama>
                        </div>
                    </Col>
                    <Col lg='6' className='px-0'>
                        <div className='story-media-content d-flex flex-column justify-content-center align-items-center'>
                            {IMPERVIOUS_STORY_INTRO_CONTENT &&
                                IMPERVIOUS_STORY_INTRO_CONTENT.filter((content) => currentStepIndex === content.index)
                                .map((content) => {
                                    return (
                                        <Fragment key={content.index}>
                                            {currentStepIndex === content.index ? (
                                                <div className='d-flex flex-column align-items-center justify-content-center w-100 h-100'>
                                                    {content.media.image ? (
                                                        <img
                                                            src={content.media.image}
                                                            alt={content.media.alt}
                                                            className='story-media-img img-fluid mb-2'
                                                        />
                                                    ) : content.media.video ? (
                                                        <YoutubeEmbed id={content.media.video} />
                                                    ) : content.media.chart && content.media.chartType === 'line' ? (
                                                        <Fragment>
                                                            <h3>{content.media.chartTitle}</h3>
                                                            {content.media.chartSubtitle &&
                                                                <h5><i>{content.media.chartSubtitle}</i></h5>
                                                            }
                                                            <ChartLine data={chartData} ticks={CHART_YEARS} />
                                                        </Fragment>
                                                    ) : content.media.chart && content.media.chartType === 'bar' ? (
                                                        <Fragment>
                                                            <h3 className='text-center'>{content.media.chartTitle}</h3>
                                                            {content.media.chartSubtitle &&
                                                                <h5><i>{content.media.chartSubtitle}</i></h5>
                                                            }
                                                            <ChartBar data={content.media.chartData} />
                                                        </Fragment>
                                                    ) : null}
                                                    
                                                    <small className='text-muted text-center mb-2'>
                                                        Source: {content.media.source}
                                                    </small>
                                                    {content.media.caption &&
                                                        <small className='text-center story-caption'>
                                                            {content.media.caption}
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
            )}
        </Container>
    );
};

export default ImperviousIntroduction;