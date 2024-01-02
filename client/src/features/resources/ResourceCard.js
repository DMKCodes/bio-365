import { useTheme } from '../../hooks/ThemeProvider';
import { Card, CardHeader, CardBody, CardText, CardTitle, CardFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ResourceCard = ({ resource }) => {
    const { mode } = useTheme();

    const { name, link, about, icon } = resource;

    return (
        <Card className={`resource-card mt-4 rounded-0 ${mode === 'dark' ? 'bg-dark border-light' : ''}`}>
            <CardHeader className='pf text-center px-2'>
                <FontAwesomeIcon icon={icon} size='xl' className='mb-2' fixedWidth />
                <CardTitle>
                    <h5 className='fw-bold'>{name}</h5>
                </CardTitle>
            </CardHeader>
            <CardBody className='d-flex flex-column justify-content-center text-center'>
                <CardText>
                    <small>{about}</small>
                </CardText>
            </CardBody>
            <CardFooter className='nb-card-footer text-center rounded-0 p-0 m-0'>
                <Button
                    color='success'
                    type='link'
                    href={link}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='resource-card-button w-100 h-100 rounded-0'
                >
                    Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' className='ms-1' />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ResourceCard;