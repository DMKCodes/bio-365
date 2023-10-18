import { Row, Col } from 'reactstrap';
import ThreatsAccordion from './ThreatsAccordion';
import ExternalButton from '../../../../components/ExternalButton';
import defineKeywords from '../../../../utils/defineKeywords';
import { THREATS_MAIN_CONTENT } from '../../../../app/shared/LEARN_CONTENT';
import threatImg from '../../../../app/media/climate-change-wildlife.jpg';
import threatImgLg from '../../../../app/media/climate-change-wildlife-lg.jpg';

const ThreatsPanel = () => {
    return (
        <Row>
            <h4 className='pf mb-4 fw-bold d-block d-lg-none text-center'>Under Threat</h4>
            <Col lg='6' xl='5' className='mt-md-0'>
                <div className='learn-img-container d-flex flex-column justify-content-center align-items-center '>
                    <img 
                        src={threatImg} 
                        alt='bedraggled kangaroos after a wildfire' 
                        className='learn-img img-fluid d-none d-lg-block' 
                    />
                    <img
                        src={threatImgLg}
                        alt='bedraggled kangaroos after a wildfire'
                        className='learn-img img-fluid d-block d-lg-none'
                    />
                    <small className='text-muted mt-1'>Photo Credit: Jo-Anne McArthur</small>
                    <small className='mb-4 mt-1 mb-lg-0 text-center w-75'>
                        Climate change has increased the frequency and intensity of extreme events, such as wildfires, which threaten the survival of thousands of plant and animal species.
                    </small>
                </div>
            </Col>
            <Col lg='6' xl='7'>
                <h4 className='pf mb-3 fw-bold d-none d-lg-block text-center'>Under Threat</h4>
                {THREATS_MAIN_CONTENT.map((text, index) => {
                    const textWithKeywords = defineKeywords(text);
                    return <p key={index}>{textWithKeywords}</p>;
                })}
                <ThreatsAccordion />
                <div className='text-center'>
                    <ExternalButton link='https://livingplanet.panda.org/en-US/' />
                </div>
            </Col>
        </Row>
    );
};

export default ThreatsPanel;