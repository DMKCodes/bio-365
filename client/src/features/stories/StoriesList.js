import { useState } from 'react';
import { Row, Col, Collapse, Button } from 'reactstrap';
import StoryCard from './StoryCard';
import { STORIES } from '../../app/shared/STORIES';

const StoriesList = ({ setActiveStory }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            {!collapsed ? (
                <Collapse isOpen={!collapsed}>
                    <Row>
                        {STORIES.map((story, index) => {
                            return (
                                <Col lg='4' md='6' key={index}>
                                    <StoryCard 
                                        story={story} 
                                        setCollapsed={setCollapsed} 
                                        setActiveStory={setActiveStory} 
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Collapse>
            ) : (
                <Button
                    type='button'
                    color='success'
                    onClick={() => {
                        setCollapsed(!collapsed);
                        setActiveStory(null);
                    }}
                    className='rounded-0 btn-sm'
                >
                    Show List
                </Button>
            )}
        </>
    );
};

export default StoriesList;