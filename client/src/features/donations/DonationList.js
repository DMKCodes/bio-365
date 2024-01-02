import { Container, Row } from 'reactstrap';
import FeaturedOrganization from './FeaturedOrganization';
import { DONATIONS_ORGS } from '../../app/shared/DONATIONS';

const DonationList = () => {
    return (
        <Container>
            <h2 className='pf mb-5 fw-bold text-center'>Conservation Groups</h2>
            {DONATIONS_ORGS.map((org, index) => {
                return (
                    <Row key={index} className='featured-organization d-flex justify-content-center'>
                        <FeaturedOrganization org={org} />
                    </Row>
                );
            })}
        </Container>
    );
};

export default DonationList;