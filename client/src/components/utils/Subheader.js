import { Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Subheader = ({ current }) => {
    return (
        <Row className='mt-5'>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    {current}
                </BreadcrumbItem>
            </Breadcrumb>
        </Row>
    );
};

export default Subheader;