import { Button } from 'reactstrap';

const TopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <Button 
            outline
            className='top-button rounded-0'
            color='dark'
            onClick={() => scrollToTop()}
        >
            Back to top
        </Button>
    );
};

export default TopButton;