import { Col, Button } from 'reactstrap';
import removeHtmlTags from '../../utils/removeHtmlTags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const MicroArticle = ({ article, index }) => {
    const title = removeHtmlTags(article.title);

    return (
        <Col md='3' key={index} className='mb-4 mb-md-0'>
            <small className='pf fw-bold text-success'>{article.category}</small>
            <h6 className='pf fw-bold mb-0'>{title}</h6>
            <div className='mt-2'>
                <Button
                    type='link'
                    color='success'
                    className='rounded-0 btn-sm'
                    href={article.link}
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    Full Article<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-2'/>
                </Button>
            </div>
        </Col>
    );
};

export default MicroArticle;