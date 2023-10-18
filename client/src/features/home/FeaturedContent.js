import { Row, Col } from 'reactstrap';
import Quote from '../../components/Quote';
import ExternalButton from '../../components/ExternalButton';
import YoutubeEmbed from '../../components/YoutubeEmbed';

const FeaturedContent = ({ feature }) => {
    return (
        <Row>
            <Col lg='7' className='px-3 px-lg-5'>
                <h6 className='pf fw-bold text-success'>Featured</h6>
                <h3 className='pf fw-bold'>{feature.title}</h3>
                <p>{feature.content}</p>
                <Quote quote={feature.quote} source={feature.quoteSource} />
                <ExternalButton link={feature.link} />
            </Col>
            <Col lg='5' className='p-0 d-flex align-items-center mt-4 mt-lg-0'>
                {feature.video &&
                    <YoutubeEmbed id={feature.video} />
                }
            </Col>
        </Row>
    );
};

export default FeaturedContent;