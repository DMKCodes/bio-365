import { Card, CardBody } from 'reactstrap';

const StoryQuote = ({ quote, source }) => {
    console.log(quote);
    return (
        <Card className='quote-card mt-3'>
            <CardBody>
                <blockquote className='blockquote'>
                    <p>
                        {quote}
                    </p>
                </blockquote>
                <footer className='blockquote-footer'>
                    <cite title='Source Title'>
                        {source}
                    </cite>
                </footer>
            </CardBody>
        </Card>
    );
};

export default StoryQuote;