import { useState, Fragment } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Row, Col } from 'reactstrap';
import ChartLine from '../../../components/ChartLine';
import ChartBar from '../../../components/ChartBar';
import ExternalButton from '../../../components/ExternalButton';
import YoutubeEmbed from '../../../components/YoutubeEmbed';
import defineKeywords from '../../../utils/defineKeywords';
import { 
    IMPERVIOUS_STORY_INTRO_CONTENT, 
    IMPERVIOUS_STORY_INTRO_MEDIA 
} from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';
import { URBAN_RURAL_POPULATIONS, CHART_YEARS } from '../../../app/shared/URBAN_RURAL_POPULATIONS';

const ImperviousIntroduction = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);
    const [chartData, setChartData] = useState(URBAN_RURAL_POPULATIONS.filter((item) => item.name === 1960));

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);

        if (data === 3) {
            setChartData((URBAN_RURAL_POPULATIONS.filter((item) => item.name === 1960)));
        } else if (data === 4) {
            setChartData(URBAN_RURAL_POPULATIONS.filter((item) => item.name <= 2007));
        } else if (data === 5) {
            setChartData(URBAN_RURAL_POPULATIONS);
        }
    };

    return (
        <Row className='d-flex justify-content-center'>
            <Col lg='6'>
                <div className='story-main-content'>
                    <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
                        {IMPERVIOUS_STORY_INTRO_CONTENT &&
                            IMPERVIOUS_STORY_INTRO_CONTENT.map((content, index) => {
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
            <Col lg='6' className='px-0'>
                <div className='story-media-content d-flex flex-column justify-content-center align-items-center'>
                    {IMPERVIOUS_STORY_INTRO_MEDIA &&
                        IMPERVIOUS_STORY_INTRO_MEDIA.filter((content) => currentStepIndex === content.index)
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
                                            ) : content.chart && content.chartType === 'line' ? (
                                                <Fragment>
                                                    <h3 className='text-center'>{content.chartTitle}</h3>
                                                    <ChartLine data={chartData} ticks={CHART_YEARS} />
                                                </Fragment>
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

export default ImperviousIntroduction;