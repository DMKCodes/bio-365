import { Container, Row } from 'reactstrap';
import Header from '../components/Header';
import VideoBackground from '../components/VideoBackground';
import DonationList from '../features/donations/DonationList';
import WhoAmI from '../features/donations/WhoAmI';
import { DONATIONS_INTRO } from '../app/shared/DONATIONS';
import { DONATION_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';

const DonationsPage = () => {
    return (
        <Container fluid className='p-0'>
            <VideoBackground video={DONATION_VIDEO_BG} />
            <Header />

            <Container className='my-5'>
                <Row className='d-flex flex-column align-items-center text-center'>
                    <h1 className='pf mb-4 fw-bold'>Why Support Biodiversity?</h1>
                    {DONATIONS_INTRO.content.map((content, index) => {
                        return (
                            <p key={index} className='donations-intro-content px-4 px-sm-2'>{content}</p>
                        );
                    })}
                </Row>

                <hr className='my-5' />
                    
                <WhoAmI />

                <hr className='my-5' />
                    
                <DonationList />
            </Container>
        </Container>
    );
};

export default DonationsPage;