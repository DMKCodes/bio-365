import { Row } from 'reactstrap';
import PodcastSpotlight from './PodcastSpotlight';
import PodcastList from './PodcastList';

const ListenPanel = () => {
    return (
        <Row className='text-center d-flex flex-column align-items-center'>
            <h4 className='pf mb-4 fw-bold '>Listen & Learn</h4>
            <PodcastSpotlight />
            <PodcastList />
        </Row>
    );
};

export default ListenPanel;