import { Card, CardBody } from 'reactstrap';
import { useTheme } from '../hooks/ThemeProvider';

const StoryQuote = ({ quote, source }) => {
    const { mode } = useTheme();

    return (
        <Card className={`quote-card my-3 rounded-0 ${mode === 'dark' ? 'bg-dark border-light' : ''}`}>
            <CardBody>
                <blockquote className='blockquote mb-0'>
                    <i>"{quote}"</i>
                </blockquote>
                <figcaption className='blockquote-footer mb-0 mt-2'>
                    {source}
                </figcaption>
            </CardBody>
        </Card>
    );
};

export default StoryQuote;