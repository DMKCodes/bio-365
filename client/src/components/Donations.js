import donationsImg from '../app/media/donations.png';

const Donations = () => {
    return (
        <div>
            <a href='https://www.buymeacoffee.com/dmkcodes' target='_blank' rel='noreferrer'>
                <img src={donationsImg} alt='support biodiversity donation link' className='donations-img' />
            </a>
        </div>
    );
};

export default Donations;