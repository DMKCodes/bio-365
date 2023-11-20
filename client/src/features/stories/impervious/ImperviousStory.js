import { useState, useEffect, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Button } from 'reactstrap';
import VideoBackground from '../../../components/VideoBackground';
import Header from '../../../components/Header';
import ImperviousIntroduction from './ImperviousIntroduction';
import ImperviousThreats from './ImperviousThreats';
import ImperviousSolutions from './ImperviousSolutions';
import ImperviousSummary from './ImperviousSummary';
import { IMPERVIOUS_VIDEO_BG } from '../../../app/shared/VIDEO_BACKGROUNDS';
import { IMPERVIOUS_STORY_METADATA } from '../../../app/shared/IMPERVIOUS_STORY_CONTENT';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ImperviousStory = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    const metadata = IMPERVIOUS_STORY_METADATA;

    useEffect(() => {
        if (window.innerWidth <= 992) {
            setIsMobileView(true);
        }
    }, []);

    // Use useLayoutEffect to detect window size changes and update isMobileView state
    useLayoutEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 992);
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

            <div className='story-nav sticky-top d-flex justify-content-around py-2'>
                <a href='#introduction' className='story-nav-link'>Introduction</a>
                <a href='#threats' className='story-nav-link'>Threats</a>
                <a href='#solutions' className='story-nav-link'>Solutions</a>
                <a href='#summary' className='story-nav-link'>TL;DR</a>
            </div>

            <Container fluid className='mt-4 mt-md-5 mb-5 px-1 px-lg-5'>
                <div className='d-flex flex-column flex-md-row align-items-center text-center text-md-start'>
                    <Button color='dark' outline className='rounded-0 ms-3 me-auto me-md-0 my-0 my-md-3'>
                        <NavLink className='nav-link' to='/stories'>
                            <FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Stories
                        </NavLink>
                    </Button>
                    <img 
                        src={metadata.authorImg}
                        alt='headshot of the author'
                        className='story-author-img-sm rounded-circle ms-0 ms-md-5 me-0 me-md-3 mt-5 mt-md-0'
                    />
                    <span className='d-flex flex-column'>
                        <p className='p-0 m-0'>{metadata.author}</p>
                        <small className='text-muted'>
                            {metadata.readLength} min read • {metadata.publishDate}
                        </small>
                    </span>
                </div>

                <span id='introduction' />

                <Row className='mt-5 mx-3'>
                    <h2 className='text-uppercase text-center fw-bold'>1. Introduction</h2>
                </Row>
                <ImperviousIntroduction isMobileView={isMobileView} />

                <span id='threats' />

                <Row className='mt-5 mx-3'>
                    <h2 className='text-uppercase text-center fw-bold'>2. Threats to Biodiversity</h2>
                </Row>
                <ImperviousThreats isMobileView={isMobileView} />

                <span id='solutions' />

                <Row className='mt-5 mx-3'>
                    <h2 className='text-uppercase text-center fw-bold'>3. Solutions</h2>
                </Row>
                <ImperviousSolutions isMobileView={isMobileView} />

                <span id='summary' />

                <Row className='mt-5 mx-3 mb-3'>
                    <h2 className='text-uppercase text-center fw-bold mb-5'>TL;DR</h2>
                </Row>
                <ImperviousSummary />
            </Container>
        </Container>
    );
};

export default ImperviousStory;