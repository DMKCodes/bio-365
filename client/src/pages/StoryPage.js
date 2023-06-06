import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import ImperviousStory from '../features/stories/impervious/ImperviousStory';

const StoryPage = () => {
    const { storyName } = useParams();
    console.log(storyName);

    return (
        <Container className='mt-3'>
            {storyName === 'impervious' ? (
                <ImperviousStory />
            ) : null}
        </Container>
    );
};

export default StoryPage;