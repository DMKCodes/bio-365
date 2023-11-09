import { useState } from 'react';
import { Container, Button } from 'reactstrap';
import Header from '../components/Header';
import VideoBackground from '../components/VideoBackground';
import TopButton from '../components/TopButton';
import ImportancePanel from '../features/learn/sections/importance/ImportancePanel';
import GlobePanel from '../features/learn/sections/interactive-globe/GlobePanel';
import ThreatsPanel from '../features/learn/sections/threats/ThreatsPanel';
import ConservationPanel from '../features/learn/sections/conservation/ConservationPanel';
import ListenPanel from '../features/learn/sections/listen-and-learn/ListenPanel';
import { LEARN_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';

const LearnPage = () => {
    const [showGlobePanel, setShowGlobePanel] = useState(true);

    return (
        <Container fluid className='learn-page p-0'>
            <VideoBackground video={LEARN_PAGE_VIDEO_BG} />
            <Header />

            <Container className='my-5'>
                <ImportancePanel />

                <hr className='learn-section' />
                <div className='d-flex justify-content-center align-items-center mb-4'>
                    <h4 className='pf text-center fw-bold mb-0'>Around the Globe</h4>
                    <Button
                        outline
                        color='dark'
                        className='btn-sm ms-3 rounded-0'
                        onClick={() => setShowGlobePanel(!showGlobePanel)}
                    >
                        {showGlobePanel ? 'Hide' : 'Show'}
                    </Button>
                </div>
                <span className={showGlobePanel ? 'd-block p-0' : 'd-none'}>
                    <GlobePanel showGlobePanel={showGlobePanel} setShowGlobePanel={setShowGlobePanel} />
                </span>
                    
                <hr className='learn-section' />
                <ThreatsPanel />

                <hr className='learn-section' />
                <ConservationPanel />

                <hr className='learn-section' />
                <ListenPanel />

                <TopButton />
            </Container>
        </Container>
    );
};

export default LearnPage;