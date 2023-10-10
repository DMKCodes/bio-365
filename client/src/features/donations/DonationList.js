import { Container, Row } from 'reactstrap';
import FeaturedOrganization from './FeaturedOrganization';
import { DONATIONS_ORGS } from '../../app/shared/DONATIONS';

const DonationList = () => {
    return (
        <Container>
            <h2 className='section-header mb-5 fw-bold text-center'>Conservation Groups</h2>
            {DONATIONS_ORGS.map((org, index) => {
                return (
                    <Row className='featured-organization d-flex justify-content-center'>
                        <FeaturedOrganization org={org} key={index} />
                    </Row>
                );
            })}
        </Container>
    );
};

export default DonationList;