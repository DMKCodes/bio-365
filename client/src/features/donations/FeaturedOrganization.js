import { Col, Row, Button } from 'reactstrap';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import fourStarImg from '../../app/media/cn-four-star.svg';

const FeaturedOrganization = ({ org }) => {
    return (
        <Row className='featured-organization d-flex justify-content-center my-5'>
            <Col lg='6' className='d-flex flex-column align-items-center justify-content-center text-center'>
                <h4 className='section-header fw-bold mb-3'>{org.name}</h4>
                <p className='m-0 mb-3 d-flex align-items-center'>
                    Charity Navigator:
                    <a 
                        href={org.charityNavigatorLink} 
                        target='_blank' 
                        rel='noreferrer'
                        className='ms-1'
                    >
                        {org.charityNavigator} 
                    </a>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-1' size='xs' />
                    <img src={fourStarImg} alt='four star rating' className='charity-nav-img ms-2' />
                </p>
                <p className='featured-organization-desc mb-3'>{org.description}</p>
                <a
                    href={org.link}
                    target='_blank'
                    rel='noreferrer'
                >
                    <Button color='success' className='rounded-0 mb-3 mb-xl-0'>
                        <span className='me-2'>Visit</span> 
                        <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                    </Button>
                </a>
            </Col>
            <Col lg='6' className='p-0 mt-3 mt-md-0 d-flex justify-content-center align-items-center'>
                <YoutubeEmbed id={org.video} />
            </Col>
        </Row>
    );
};

export default FeaturedOrganization;