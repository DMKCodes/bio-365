import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Subheader = ({ current }) => {
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <Link to='/'>Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
                {current}
            </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default Subheader;