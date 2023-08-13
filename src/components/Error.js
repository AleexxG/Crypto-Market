function Error({ error }) {
    let corsError = '';

    const errorMessage = () => {
        if (error.message === 'Failed to fetch') {
            corsError = 'API rate limit exceeded';
            return corsError;
        } 
        else return error.message;
    }

    return (
        <div className='d-flex flex-column align-items-center m-5'>
            <i className="fa-solid fa-circle-exclamation text-danger fs-1"></i>
            <p className='mt-2 text-danger'>{errorMessage()}</p>
        </div>
    )
}

export default Error;