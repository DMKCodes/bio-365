import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';
import VideoBackground from '../components/VideoBackground';
import ResourcesList from '../features/resources/ResourcesList';
import ResourcesSidebar from '../features/resources/ResourcesSidebar';
import { RESOURCE_PAGE_VIDEO_BG } from '../app/shared/VIDEO_BACKGROUNDS';

const ResourcesPage = () => {
    const [category, setCategory] = useState('All Resources');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <Container fluid className='p-0'>
            <VideoBackground video={RESOURCE_PAGE_VIDEO_BG} />
            <Header />

            <Container className='my-5'>
                <Row>
                    <Col 
                        xs={sidebarCollapsed ? '2' : '5'} 
                        sm={sidebarCollapsed ? '2' : '4'} 
                        md={sidebarCollapsed ? '2' : '3'} 
                        xl='2'
                    >
                        <ResourcesSidebar
                            setCategory={setCategory}
                            sidebarCollapsed={sidebarCollapsed}
                            setSidebarCollapsed={setSidebarCollapsed}
                        />
                    </Col>
                    <Col 
                        xs={sidebarCollapsed ? '10' : '7'} 
                        sm={sidebarCollapsed ? '10' : '8'} 
                        md={sidebarCollapsed ? '10' : '9'}
                        xl='10'
                    >
                        <ResourcesList category={category} />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ResourcesPage;