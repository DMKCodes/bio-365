import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const TopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <Button 
            outline
            className='top-button rounded-circle btn-sm'
            color='success'
            onClick={() => scrollToTop()}
        >
            <FontAwesomeIcon icon={faChevronUp} size='sm' />
        </Button>
    );
};

export default TopButton;