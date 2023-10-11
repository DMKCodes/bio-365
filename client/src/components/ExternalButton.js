import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ExternalButton = ({ link }) => {
    return (
        <Button 
            color='success' 
            type='link'
            href={link}
            target='_blank'
            rel='noreferrer noopener'
        >
            <span className='me-2'>Read More</span> 
            <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
        </Button>
    );
};

export default ExternalButton;