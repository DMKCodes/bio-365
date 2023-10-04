import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const NewsPagination = ({ currentPage, setCurrentPage, pageSize, articlesLength }) => {
    const pagesCount = Math.ceil(articlesLength / pageSize);
    const pagesToShow = 3;
    const pagesOffset = Math.max(0, Math.min(pagesCount - pagesToShow, currentPage - Math.floor(pagesToShow / 2)));

    const handleClick = (e, index) => {
        e.preventDefault();
        setCurrentPage(index);
    };
    
    return (
        <Pagination size='sm' aria-label='pagination' className='d-flex justify-content-center justify-content-md-end pagination p-0'>
            <PaginationItem disabled={currentPage <= 0}>
                <PaginationLink
                    first
                    href='#'
                    className='rounded-0 text-center'
                    onClick={e => handleClick(e, 0)}
                />
            </PaginationItem>
            <PaginationItem disabled={currentPage <= 0}>
                <PaginationLink
                    href='#'
                    previous
                    className='rounded-0 text-center'
                    onClick={e => handleClick(e, currentPage - 1)}
                />
            </PaginationItem>
            {[...Array(Math.min(pagesToShow, pagesCount))].map((page, i) => 
                <PaginationItem active={i + pagesOffset === currentPage} key={i}>
                    <PaginationLink 
                        href='#'
                        className='rounded-0 text-center'
                        onClick={e => handleClick(e, i + pagesOffset)} 
                    >
                        {i + pagesOffset + 1}
                    </PaginationLink>
                </PaginationItem>
            )}
            {pagesCount > pagesOffset + pagesToShow + 1 && 
                <PaginationItem>
                    <PaginationLink>...</PaginationLink>
                </PaginationItem>
            }
            {pagesCount > pagesOffset + pagesToShow && 
                <PaginationItem>
                    <PaginationLink 
                        href='#'
                        className='rounded-0 text-center'
                        onClick={e => handleClick(e, pagesCount - 1)}
                    >
                        {pagesCount}
                    </PaginationLink>
                </PaginationItem>
            }
            <PaginationItem disabled={currentPage >= pagesCount - 1}>
                <PaginationLink
                    href='#'
                    next
                    className='rounded-0 text-center'
                    onClick={e => handleClick(e, currentPage + 1)}
                />
            </PaginationItem>
            <PaginationItem disabled={currentPage >= pagesCount - 1}>
                <PaginationLink
                    href='#'
                    last
                    className='rounded-0 text-center'
                    onClick={e => handleClick(e, pagesCount - 1)}
                />
            </PaginationItem>
        </Pagination>
    );
};

export default NewsPagination;