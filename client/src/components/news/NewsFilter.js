import { useState } from 'react';
import { 
    Row, 
    Col,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const NewsFilter = () => {
    const [sourceDropdownOpen, setSourceDropdownOpen] = useState(false);
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

    return (
        <Row className='d-flex'>
            <Col>
                <h5>Filter By: </h5>
            </Col>
            <Col>
                <Dropdown 
                    isOpen={categoryDropdownOpen} 
                    toggle={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                >
                    <DropdownToggle caret color='light'>
                        Category
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            News
                        </DropdownItem>
                        <DropdownItem>
                            Research
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Col>
            <Col>
                <Dropdown 
                    isOpen={sourceDropdownOpen} 
                    toggle={() => setSourceDropdownOpen(!sourceDropdownOpen)}
                >
                    <DropdownToggle caret color='light'>
                        Source
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            Conservation International
                        </DropdownItem>
                        <DropdownItem>
                            Down To Earth
                        </DropdownItem>
                        <DropdownItem>
                            Frontiers in Conservation Science
                        </DropdownItem>
                        <DropdownItem>
                            Mongabay
                        </DropdownItem>
                        <DropdownItem>
                            PLOS ONE Biodiversity
                        </DropdownItem>
                        <DropdownItem>
                            ScienceDaily
                        </DropdownItem>
                        <DropdownItem>
                            The Conversation
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Col>
        </Row>
    );
};

export default NewsFilter;