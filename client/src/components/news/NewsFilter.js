import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterDisplayArticles } from '../../features/news/newsSlice';
import { 
    Row,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const NewsFilter = () => {
    const [sourceDropdownOpen, setSourceDropdownOpen] = useState(false);
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

    const dispatch = useDispatch();

    const handleFilterChange = (filterType, filterValue) => {
        dispatch(filterDisplayArticles({ filterType, filterValue }));
    };

    return (
        <Row>
            <h5>Filter By: </h5>
            <Dropdown 
                isOpen={categoryDropdownOpen} 
                toggle={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
            >
                <DropdownToggle caret color='light'>
                    Category
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem
                        onClick={() => handleFilterChange('category', null)}
                    >
                        All Categories
                    </DropdownItem>
                    <DropdownItem 
                        onClick={() => handleFilterChange('category', 'News')}
                    >
                        News
                    </DropdownItem>
                    <DropdownItem 
                        onClick={() => handleFilterChange('category', 'Research')}
                    >
                        Research
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown 
                isOpen={sourceDropdownOpen} 
                toggle={() => setSourceDropdownOpen(!sourceDropdownOpen)}
            >
                <DropdownToggle caret color='light'>
                    Source
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem
                        onClick={() => handleFilterChange('publisher', null)}
                    >
                        All Publishers
                    </DropdownItem>
                    <DropdownItem 
                        onClick={() => handleFilterChange('publisher', 'Conservation International')}
                    >
                        Conservation International
                    </DropdownItem>
                    <DropdownItem 
                        onClick={() => handleFilterChange('publisher', 'Down To Earth')}
                    >
                        Down To Earth
                    </DropdownItem>
                    <DropdownItem
                        onClick={() => handleFilterChange('publisher', 'Frontiers in Conservation Science')}
                    >
                        Frontiers in Conservation Science
                    </DropdownItem>
                    <DropdownItem
                        onClick={() => handleFilterChange('publisher', 'Mongabay')}
                    >
                        Mongabay
                    </DropdownItem>
                    <DropdownItem
                        onClick={() => handleFilterChange('publisher', 'PLOS ONE Biodiversity')}
                    >
                        PLOS ONE Biodiversity
                    </DropdownItem>
                    <DropdownItem
                        onClick={() => handleFilterChange('publisher', 'ScienceDaily')}
                    >
                        ScienceDaily
                    </DropdownItem>
                    <DropdownItem
                        onClick={() => handleFilterChange('publisher', 'The Conversation')}
                    >
                        The Conversation
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Row>
    );
};

export default NewsFilter;