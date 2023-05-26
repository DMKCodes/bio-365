import { Row, Col } from 'reactstrap';
import { CONSERVATION_GROUPS } from '../../../../datasets/conservationGroups';

const ConservationGroupList = () => {
    return (
        <Row>
            {CONSERVATION_GROUPS.map((group) => {
                return (
                    <Col md='4' className='d-flex justify-content-center'>
                        <a href={group.link} target='_blank' rel='noreferrer'>
                            <img src={group.image} alt='conservation international' className='img-fluid cons-img' />
                        </a>
                    </Col>
                )
            })}
        </Row>
    );
};

export default ConservationGroupList;