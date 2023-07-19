import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Row, Col } from 'reactstrap';
import ChartLine from '../../../components/ChartLine';
import ChartBar from '../../../components/ChartBar';
import defineKeywords from '../../../utils/defineKeywords';
import { IMPERVIOUS_STORY_MAIN_CONTENT } from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';
import { URBAN_RURAL_POPULATIONS, CHART_YEARS } from '../../../app/shared/URBAN_RURAL_POPULATIONS';
import { METRO_POPULATIONS } from '../../../app/shared/METRO_POPULATIONS';
import impervious from '../../../app/media/impervious.jpg';
import cityPeople from '../../../app/media/city-people.jpg';
import greenCity from '../../../app/media/green-city.jpg'

const ImperviousIntroduction = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);
    const [chartData, setChartData] = useState(URBAN_RURAL_POPULATIONS.filter((item) => item.name === 1960));

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
        console.log(currentStepIndex);

        if (data === 3) {
            setChartData((URBAN_RURAL_POPULATIONS.filter((item) => item.name === 1960)));
        } else if (data === 4) {
            setChartData(URBAN_RURAL_POPULATIONS.filter((item) => item.name <= 2007));
        } else if (data === 5) {
            setChartData(URBAN_RURAL_POPULATIONS);
        }
    };

    return (
        <Row>
            <Col md='5'>
                <div className='story-side-content'>
                    <Scrollama 
                        offset={0.5} 
                        onStepEnter={onStepEnter} 
                        debug
                    >
                        {IMPERVIOUS_STORY_MAIN_CONTENT &&
                            IMPERVIOUS_STORY_MAIN_CONTENT.map((content, index) => {
                                return (
                                    <Step 
                                        data={index} 
                                        key={index} 
                                    >
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
            <Col md='7' className='story-main px-0'>
                <div className='story-main-content d-flex justify-content-center'>
                    { currentStepIndex <= 1 ? (
                        <span className='d-flex flex-column align-items-center'>
                            <iframe width='560' height='315' src='https://www.youtube.com/embed/EbAoOQPNsu8' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
                            <small className='text-muted text-center mt-2'>
                                Video Source: PennState Extension
                            </small>
                        </span>
                    ) : currentStepIndex === 2 ? (
                        <span className='d-flex flex-column align-items-center'>
                            <img 
                                src={impervious} 
                                alt='impervious infographic' 
                                className='story-main-image mb-2' 
                            />
                            <small className='text-muted text-center'>
                                Image Source: Raphaël Biscaldi
                            </small>
                        </span>
                    ) : currentStepIndex <= 5 ? (
                        <span className='d-flex flex-column align-items-center'>
                            <h3 className='align-self-center'>
                                Urban & Rural Population Distribution (1960-2020)
                            </h3>
                            <ChartLine data={chartData} ticks={CHART_YEARS} />
                            <small className='text-muted text-center'>
                                Source: World Bank, based on data from the UN Population Division
                            </small>
                        </span>
                    ) : currentStepIndex === 6 ? (
                        <span className='d-flex flex-column align-items-center'>
                            <img
                                src={cityPeople}
                                alt='city people'
                                className='story-main-image mb-2'
                            />
                            <small className='text-muted text-center'>
                                Image Source: Christopher Burns
                            </small>
                        </span>
                    ) : currentStepIndex === 7 ? (
                        <span className='d-flex flex-column align-items-center'>
                            <h3 className='text-center'>
                                Urban & Rural Population Distribution (1960-2020)
                            </h3>
                            <ChartBar data={METRO_POPULATIONS} />
                            <small className='text-muted text-center'>
                                Source: Pew Research Center<br />
                                Note: 'Smaller metropolitan' refers to counties in metros with fewer than 1 million residents.
                            </small>
                        </span>
                    ) : currentStepIndex === 8 || 9 ? (
                        <span className='d-flex flex-column align-items-center'>
                            <img
                                src={greenCity}
                                alt='green city'
                                className='story-main-image mb-2'
                            />
                            <small className='text-muted text-center'>
                                Image Source: CHUTTERSNAP
                            </small>
                        </span>
                    ) : null}
                </div>
            </Col>
        </Row>
    );
};

export default ImperviousIntroduction;