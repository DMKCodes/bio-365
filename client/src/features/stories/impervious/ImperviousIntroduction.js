import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Row, Col } from 'reactstrap';
import ChartLine from '../../../components/ChartLine';
import ChartBar from '../../../components/ChartBar';
import defineKeywords from '../../../utils/defineKeywords';
import { IMPERVIOUS_STORY_MAIN_CONTENT } from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';
import { URBAN_RURAL_POPULATIONS, CHART_YEARS } from '../../../app/shared/URBAN_RURAL_POPULATIONS';
import { METRO_POPULATIONS } from '../../../app/shared/METRO_POPULATIONS';
import imperviousInfographic from '../../../app/media/impervious-surfaces.png';
import cityPeople from '../../../app/media/city-people.jpg';
import suburbPopulations from '../../../app/media/suburban-population-share.webp';

const ImperviousIntroduction = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);
    const [chartData, setChartData] = useState(URBAN_RURAL_POPULATIONS.filter((item) => item.name === 1960));

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
        console.log(currentStepIndex);

        if (currentStepIndex === 3) {
            setChartData((URBAN_RURAL_POPULATIONS.filter((item) => item.name === 1960)));
        } else if (currentStepIndex === 4) {
            setChartData(URBAN_RURAL_POPULATIONS.filter((item) => item.name <= 2007));
        } else if (currentStepIndex === 5) {
            setChartData(URBAN_RURAL_POPULATIONS);
        }
    };

    const onStepExit = () => {
        return;
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
            <Col md='7' className='story-main px-0'>
                <div className='story-main-content d-flex justify-content-center'>
                    {currentStepIndex <= 2 ? (
                        <span className='d-flex flex-column'>
                            <img 
                                src={imperviousInfographic} 
                                alt='impervious infographic' 
                                className='story-main-image mb-1' 
                            />
                            <small className='text-muted text-center'>
                                Image Source: Stormwater Shepherds
                            </small>
                        </span>
                    ) : currentStepIndex <= 5 ? (
                        <span className='d-flex flex-column'>
                            <h3 className='text-center'>
                                Urban & Rural Population Distribution (1960-2020)
                            </h3>
                            <ChartLine data={chartData} ticks={CHART_YEARS} />
                            <small className='text-muted text-center'>
                                Source: World Bank, based on data from the UN Population Division
                            </small>
                        </span>
                    ) : currentStepIndex === 6 ? (
                        <span className='d-flex flex-column'>
                            <img
                                src={cityPeople}
                                alt='city people'
                                className='story-main-image mb-1'
                            />
                            <small className='text-muted text-center'>
                                Image Source: Christopher Burns
                            </small>
                        </span>
                    ) : currentStepIndex === 7 ? (
                        <span className='d-flex flex-column'>
                            <ChartBar data={METRO_POPULATIONS} />
                            <small className='text-muted text-center'>
                                Source: Pew Research Center
                            </small>
                        </span>
                    ) : null}
                </div>
            </Col>
        </Row>
    );
};

export default ImperviousIntroduction;