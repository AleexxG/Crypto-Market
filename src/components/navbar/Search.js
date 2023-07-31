function Search() {
    return (
        <div className="w-100">
            <form className="d-flex" 
                role="search">
                <input className="form-control me-2" 
                        style={{opacity: '15%'}} 
                        type="search" 
                        placeholder="Search..." 
                        aria-label="Search">
                </input>
                <button className="btn btn-outline-danger" 
                        type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    )
}

export default Search;