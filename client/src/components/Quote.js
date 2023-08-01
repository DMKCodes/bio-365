import { Card, CardBody } from 'reactstrap';

const StoryQuote = ({ quote, source }) => {
    return (
        <Card className='quote-card my-3 rounded-0'>
            <CardBody>
                <blockquote className='blockquote mb-0'>
                    "{quote}"
                </blockquote>
                <figcaption className='blockquote-footer mb-0 mt-2'>
                    {source}
                </figcaption>
            </CardBody>
        </Card>
    );
};

export default StoryQuote;