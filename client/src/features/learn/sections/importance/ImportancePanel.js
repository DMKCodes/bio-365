import { Row, Col } from 'reactstrap';
import ExternalButton from '../../../../components/ExternalButton';
import YoutubeEmbed from '../../../../components/YoutubeEmbed';
import defineKeywords from '../../../../utils/defineKeywords';
import { IMPORTANT_CONTENT } from '../../../../app/shared/LEARN_CONTENT';
import importantImg from '../../../../app/media/bio-importance.jpg';
import importantImgLg from '../../../../app/media/bio-importance-lg.jpg';

const ImportancePanel = () => {
    return (
        <Row className='pt-5'>
            <Col lg='7' className='d-flex flex-column justify-content-center'>
                <h4 className='pf mb-4 fw-bold mx-auto'>Why is it important?</h4>
                {IMPORTANT_CONTENT.map((text, index) => {
                    const textWithKeywords = defineKeywords(text);
                    return <p key={index} className='text-start'>{textWithKeywords}</p>;
                })}
                <span className='mx-auto'>
                    <ExternalButton link='https://www.nrdc.org/stories/biodiversity-101' />
                </span>
                <div className='learn-importance-vid mt-4 mx-auto'>
                    <YoutubeEmbed id='GlWNuzrqe7U' />
                </div>
            </Col>
            <Col lg='5' className='d-flex flex-column justify-content-center align-items-center mt-5 mt-md-0'>
                <img 
                    src={importantImgLg} 
                    alt='honeybees pollenate red and yellow flowers' 
                    className='learn-img img-fluid d-none d-lg-block'
                />
                <img
                    src={importantImg}
                    alt='a honeybee pollenates blue flowers'
                    className='learn-img img-fluid mt-4 d-block d-lg-none'
                />
                <small className='text-muted mt-1'>Photo Credit: Łukasz Rawa</small>
                <small className='mt-1 w-75 text-center'>
                    Pollination is an ecosystem service that plays a critical role in the reproduction of many plants, preserving nature and preventing food scarcity.
                </small>
            </Col>
        </Row>
    );
};

export default ImportancePanel;