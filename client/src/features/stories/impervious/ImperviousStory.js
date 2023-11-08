import { useState, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Button } from 'reactstrap';
import VideoBackground from '../../../components/VideoBackground';
import Header from '../../../components/Header';
import ImperviousIntroduction from './ImperviousIntroduction';
import ImperviousThreats from './ImperviousThreats';
import ImperviousSolutions from './ImperviousSolutions';
import ImperviousSummary from './ImperviousSummary';
import { IMPERVIOUS_VIDEO_BG } from '../../../app/shared/VIDEO_BACKGROUNDS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ImperviousStory = () => {
    const [isMobileView, setIsMobileView] = useState(false);

    // Use useLayoutEffect to detect window size changes and update isMobileView state
    useLayoutEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <Container fluid className='p-0'>
            <VideoBackground video={IMPERVIOUS_VIDEO_BG} />
            <Header />
            <Button color='dark' outline className='rounded-0 ms-3 my-3'>
                <NavLink className='nav-link' to='/stories'>
                    <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Stories
                </NavLink>
            </Button>

            <Container fluid className='my-5 px-1 px-lg-5'>
                <p className='text-center text-muted'>Scroll the page to read the story. When you reach a video, if you want to watch it, stop scrolling until you're finished.</p>

                <Row className='mt-5'>
                    <h2 className='text-uppercase text-center fw-bold'>1. Introduction</h2>
                </Row>
                <ImperviousIntroduction isMobileView={isMobileView} />

                <Row className='mt-5'>
                    <h2 className='text-uppercase text-center fw-bold'>2. Threats to Biodiversity</h2>
                </Row>
                <ImperviousThreats isMobileView={isMobileView} />

                <Row className='mt-5'>
                    <h2 className='text-uppercase text-center fw-bold'>3. Solutions</h2>
                </Row>
                <ImperviousSolutions isMobileView={isMobileView} />

                <Row className='mt-5 mb-3'>
                    <h2 className='text-uppercase text-center fw-bold mb-5'>Conclusion</h2>
                </Row>
                <ImperviousSummary />
            </Container>
        </Container>
    );
};

export default ImperviousStory;