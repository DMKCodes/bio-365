import { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import ResourceCard from './ResourceCard';
import { RESOURCES } from '../../app/shared/RESOURCES';

const ResourcesList = ({ activeCategory }) => {
    const [filteredResources, setFilteredResources] = useState(RESOURCES);

    useEffect(() => {
        if (activeCategory !== 'All Resources') {
            setFilteredResources(RESOURCES.filter((resource) => resource.category === activeCategory));         
        } else {
            setFilteredResources(RESOURCES);
        }
    }, [activeCategory]);

    return (
        <Row>
            {filteredResources.map((resource, index) => {
                return (
                    <Col md='6' xl='4' key={index} className='d-flex justify-content-center'>
                        <ResourceCard resource={resource} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ResourcesList;