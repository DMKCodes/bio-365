import { Row, Col } from 'reactstrap';
import Quote from './Quote';
import ExternalButton from './ExternalButton';
import YoutubeEmbed from './YoutubeEmbed';

const FeaturedContent = ({ feature }) => {
    return (
        <Row>
            <Col lg='7' className='px-5 pt-4 bg-primary'>
                <h4 className='fw-bold text-white'>Featured</h4>
                <h5 className='text-white'>{feature.title}</h5>
                <p className='text-white'>{feature.content}</p>
                <Quote quote={feature.quote} source={feature.quoteSource} />
                <ExternalButton link={feature.link} />
            </Col>
            <Col lg='5' className='p-0'>
                {feature.video &&
                    <YoutubeEmbed id={feature.video} />
                }
            </Col>
        </Row>
    );
};

export default FeaturedContent;