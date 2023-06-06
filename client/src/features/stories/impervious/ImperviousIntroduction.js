import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Row, Col } from 'reactstrap';
import DefinitionTooltip from '../../../components/DefinitionTooltip';

const ImperviousIntroduction = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);
    const [showMain, setShowMain] = useState(true);

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);

        if (currentStepIndex === 4) {
            setShowMain(true);
        }
    };

    const onStepExit = ({ direction }) => {
        if (currentStepIndex === 4 && direction === 'down') {
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
                        <Step data={2}>
                            <div className='story-step'>
                                <h5 className='text-center text-uppercase fw-bold mt-5'>
                                    Examples
                                </h5>
                                <p className='text-center mx-5 mb-5'></p>
                            </div>
                        </Step>
                        <Step data={3}>
                            <div className='story-step'>
                                <h5 className='text-center text-uppercase fw-bold mt-5'>
                                    What makes them impervious?
                                </h5>
                                <p className='text-center mx-5 mb-5'>
                                    These surfaces are so named because they cannot absorb water. When it rains, water typically infiltrates the soil, is stored as groundwater, and is slowly discharged into nearby bodies of water. Impervious surfaces prevent infiltration and instead trap water above ground, leading to a host of problems including reduced groundwater recharge, increased water pollution, and localized flooding.
                                </p>
                            </div>
                        </Step>
                        <Step data={4}>
                            <div className='story-step'>
                                <h5 className='text-center text-uppercase fw-bold mt-5'>
                                    Culprit: Urban sprawl
                                </h5>
                                <p className='text-center mx-5 mb-5'>
                                    The expansion of cities and towns requires construction of new roads, neighborhoods, commercial buildings, and walkways. These suburban areas are often characterized by low-density housing, increased reliance on automobiles for transportation, and the destruction and fragmentation of wildlife habitat.
                                </p>
                                <p className='text-center mx-5 mb-5'>
                                    The simple fact is we are developing more land than we can afford.{' '}
                                        <a
                                            href='https://www.frontiersin.org/articles/10.3389/fenvs.2019.00029/full'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            A 2019 study
                                        </a> 
                                    {' '}of population and land-use dynamics found that in Lower Saxony, Germany, even municipalities that experienced population decline increased their urban land consumption. The corresponding increase in impervious surface cover reduced infiltration rates and increased evaporation and surface runoff.
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