import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import TopButton from '../components/TopButton';
import ImperviousStory from '../features/stories/impervious/ImperviousStory';

const StoryPage = () => {
    const { storyName } = useParams();

    return (
        <Container fluid className='p-0'>
            {storyName === 'impervious' ? (
                <ImperviousStory />
            ) : null}
            <TopButton />
        </Container>
    );
};

export default StoryPage;