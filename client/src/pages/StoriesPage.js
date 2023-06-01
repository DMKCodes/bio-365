import { useState } from 'react';
import { Container, Row } from 'reactstrap';
import StoriesList from '../features/stories/StoriesList';
import ImperviousSurfacesStory from '../features/stories/impervious/ImperviousSurfacesStory';

const StoriesPage = () => {
    const [activeStory, setActiveStory] = useState(null);

    return (
        <Container>
            {!activeStory &&
                <Row className='text-center mb-3'>
                    <h2 className='text-uppercase'>Stories</h2>
                    <small className='text-muted'>
                        Bite-sized, scrollable looks into the challenges facing biodiversity.
                    </small>
                </Row>
            }
            <StoriesList setActiveStory={setActiveStory} />
            {(activeStory && activeStory.type === 'Impervious Surfaces') &&
                <ImperviousSurfacesStory />
            }
        </Container>
    );
};

export default StoriesPage;