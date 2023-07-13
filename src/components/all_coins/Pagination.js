import React from 'react'

function Pagination({current_page, handle_click}) {
    let page_numbers = [];
    
    const total_pages = 92;

    const display_pagination = (current_page) => {
        if (current_page < 5)
        {
            page_numbers = [1,2,3,4,5];
            return (
                <div className='d-flex gap-2'>
                    {page_numbers.map(number => (
                        <li key={number}>
                            <a onClick={(e) => handle_click(e, number)} 
                                className={`page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white shadow-none
                                ${current_page == number ? `bg-danger` : `bg-transparent`}`} 
                                href="/">
                                {number}
                            </a>
                        </li>
                    ))}
                
                    <li>
                        <p className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent">...</p>
                    </li>
                    <li>
                        <a onClick={(e) => handle_click(e, total_pages)} 
                           className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent" 
                           href="/">
                            {total_pages}
                        </a>
                    </li> 
                </div>
            )
        }

        if (current_page >= 3 && current_page < total_pages - 3)
        {
            page_numbers = [current_page - 1, current_page, current_page + 1];
            return (
                <div className='d-flex gap-2'>
                    <li>
                        <a onClick={(e) => handle_click(e, 1)} 
                           className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent" 
                           href="/">
                            1
                        </a>
                    </li> 
                    <li>
                        <p className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent">...</p>
                    </li>

                    {page_numbers.map(number => (
                        <li key={number}>
                            <a onClick={(e) => handle_click(e, number)} 
                                className={`page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white shadow-none
                                ${current_page == number ? `bg-danger` : `bg-transparent`}`} 
                                href="/">
                                {number}
                            </a>          
                        </li>
                    ))}
                
                    <li>
                        <p className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent">...</p>
                    </li>
                    <li>
                        <a onClick={(e) => handle_click(e, total_pages)} 
                           className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent" 
                           href="/">
                            {total_pages}
                        </a>
                    </li> 
                </div>
            )
        }

        if (current_page >= total_pages - 3)
        {
            page_numbers = [total_pages - 4, total_pages - 3, total_pages - 2, total_pages - 1, total_pages];
            return (
                <div className='d-flex gap-2'>
                    <li>
                        <a onClick={(e) => handle_click(e, 1)} 
                           className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent" 
                           href="/">
                            1
                        </a>
                    </li> 
                    <li>
                        <p className="page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white bg-transparent">...</p>
                    </li>

                    {page_numbers.map(number => (
                        <li key={number}>
                            <a onClick={(e) => handle_click(e, number)} 
                                className={`page-link px-sm-3 px-2 rounded-2 rounded-2 border-0 fw-bold text-white shadow-none
                                ${current_page == number ? `bg-danger` : `bg-transparent`}`} 
                                href="/">
                                {number}
                            </a>
                        </li>
                    ))}
                </div>
            )
        }
    }

    return (
        <div className='d-flex justify-content-center mb-5'>
            <ul className="pagination mb-0">
                <li>
                    <a onClick={(e) => handle_click(e, current_page - 1)} 
                        className={`page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white shadow-none bg-transparent
                        ${current_page == 1 ? `disabled` : ``}`} 
                        href="/">
                        <i className="fa-solid fa-chevron-left"></i>
                    </a>          
                </li>

                {display_pagination(current_page)}

                <li>
                    <a onClick={(e) => handle_click(e, current_page + 1)} 
                        className={`page-link px-sm-3 px-2 rounded-2 border-0 fw-bold text-white shadow-none bg-transparent
                        ${current_page == total_pages ? `disabled` : ``}`} 
                        href="/">
                        <i className="fa-solid fa-chevron-right"></i>
                    </a>          
                </li>
            </ul>
        </div>
    )
}

export default Pagination