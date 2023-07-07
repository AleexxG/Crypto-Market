import React from 'react'

function Error(props) {
    return (
        <div className='d-flex flex-column align-items-center m-5'>
            <i className="fa-solid fa-circle-exclamation text-danger fs-1"></i>
            <p className='mt-2 text-danger'>{props.error.message}</p>
        </div>
    )
}

export default Error