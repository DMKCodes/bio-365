import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ExternalButton = ({ link }) => {
    return (
        <a
            href={link}
            target='_blank'
            rel='noreferrer'
        >
            <Button 
                color='success'
                className='btn-sm rounded-0'
            >
                <span className='me-2'>Read More</span> 
                <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
            </Button>
        </a>
    );
};

export default ExternalButton;