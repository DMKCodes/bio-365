import { Container, Row, Col} from 'reactstrap';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container className='p-2'>
                <Row>
                    <Col md='4' xs='12'>
                        <p className='text-center'>Created by Douglas Kissack</p>
                    </Col>
                    <Col md='4' xs='6' className='text-center'>                     
                        <a 
                            href='https://github.com/DMKCodes'
                            target='_blank'
                            rel='noreferrer'
                            
                        >
                            GitHub
                        </a>
                    </Col>
                    <Col md='4' xs='6' className='text-center'>                     
                        <a 
                            href='https://dmk.codes/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Portfolio
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;