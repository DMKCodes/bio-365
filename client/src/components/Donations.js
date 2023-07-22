import { Card, CardImg, CardTitle, CardBody, CardText, Button, Row, Col } from 'reactstrap';
import donations from '../app/media/donations.jpg';

const Donations = () => {
    return (
        <a 
            href='https://www.buymeacoffee.com/dmkcodes' 
            target='_blank' 
            rel='noreferrer'
        >
            <img 
                src='https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png' 
                alt='Buy Me A Coffee' 
                style={{height: '60px', width: '217px'}} 
                className='mb-3' 
            />
        </a>
    );
};

export default Donations;