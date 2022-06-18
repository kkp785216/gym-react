import ReactPaginate from 'react-paginate';
import './Pagination.css'

const Pagination = (props) => {

    return (
        <div className="pagination-wrapper">
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={props.handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={props.pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                activeClassName="pagination-active"
                forcePage={parseInt(props.page - 1)}
                containerClassName="blog-pagination"
            />
        </div>
    )
}

export default Pagination