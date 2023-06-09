import { Row, Col } from 'reactstrap';
import { CONSERVATION_GROUPS } from '../../../../app/shared/CONSERVATION_GROUPS';

const ConservationGroupList = () => {
    return (
        <Row>
            {CONSERVATION_GROUPS.map((group, index) => {
                return (
                    <Col md='4' className='d-flex justify-content-center' key={index}>
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