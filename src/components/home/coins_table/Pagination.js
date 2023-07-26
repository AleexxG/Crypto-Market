function Pagination({currentPage, totalPages, pageClick}) {
    let pages = [];

    const displayPagination = (currentPage) => {
        if (currentPage < 5) {
            pages = [1,2,3,4,5];
            return (
                <div className='d-flex gap-2'>
                    {pages.map(page => (
                        <li key={page}>
                            <a onClick={(e) => pageClick(e, page)} 
                                className={`page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white shadow-none
                                ${currentPage === page ? `bg-danger` : `bg-transparent`}`} 
                                href="/">
                                {page}
                            </a>
                        </li>
                    ))}
                
                    <li>
                        <p className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent">...</p>
                    </li>
                    <li>
                        <a onClick={(e) => pageClick(e, totalPages)} 
                           className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent" 
                           href="/">
                            {totalPages}
                        </a>
                    </li> 
                </div>
            )
        }

        else if (currentPage >= 3 && currentPage < totalPages - 3) {
            pages = [currentPage - 1, currentPage, currentPage + 1];
            return (
                <div className='d-flex gap-2'>
                    <li>
                        <a onClick={(e) => pageClick(e, 1)} 
                           className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent" 
                           href="/">
                            1
                        </a>
                    </li> 
                    <li>
                        <p className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent">...</p>
                    </li>

                    {pages.map(page => (
                        <li key={page}>
                            <a onClick={(e) => pageClick(e, page)} 
                                className={`page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white shadow-none
                                ${currentPage === page ? `bg-danger` : `bg-transparent`}`} 
                                href="/">
                                {page}
                            </a>          
                        </li>
                    ))}
                
                    <li>
                        <p className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent">...</p>
                    </li>
                    <li>
                        <a onClick={(e) => pageClick(e, totalPages)} 
                           className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent" 
                           href="/">
                            {totalPages}
                        </a>
                    </li> 
                </div>
            )
        }

        else {
            pages = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            return (
                <div className='d-flex gap-2'>
                    <li>
                        <a onClick={(e) => pageClick(e, 1)} 
                           className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent" 
                           href="/">
                            1
                        </a>
                    </li> 
                    <li>
                        <p className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent">...</p>
                    </li>

                    {pages.map(page => (
                        <li key={page}>
                            <a onClick={(e) => pageClick(e, page)} 
                                className={`page-link px-sm-3 px-2 rounded-2 rounded-2 border-0 fw-bold text-white shadow-none
                                ${currentPage === page ? `bg-danger` : `bg-transparent`}`} 
                                href="/">
                                {page}
                            </a>
                        </li>
                    ))}
                </div>
            )
        }
    };

    return (
        <div className='d-flex justify-content-center mb-5'>
            <ul className="pagination mb-0">
                <li>
                    <a onClick={(e) => pageClick(e, currentPage - 1)} 
                        className={`page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white shadow-none bg-transparent
                        ${currentPage === 1 ? `disabled` : ``}`} 
                        href="/">
                        <i className="fa-solid fa-chevron-left"></i>
                    </a>          
                </li>

                {displayPagination(currentPage)}

                <li>
                    <a onClick={(e) => pageClick(e, currentPage + 1)} 
                        className={`page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white shadow-none bg-transparent
                        ${currentPage === totalPages ? `disabled` : ``}`} 
                        href="/">
                        <i className="fa-solid fa-chevron-right"></i>
                    </a>          
                </li>
            </ul>
        </div>
    )
}

export default Pagination;