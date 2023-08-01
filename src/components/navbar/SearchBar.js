import { useState } from "react";
import SearchResult from "./SearchResult";

function SearchBar() {
    const [input, setInput] = useState('');

    return (
        <div className="w-100 position-relative">
            <form>
                <div className="rounded-2" style={{background: 'var(--color-input)'}}>
                    <div className="input-group d-flex align-items-center">
                        <input className="search_input form-control border-0 text-white" 
                                style={{background: 'var(--color-input)'}} 
                                type="search" 
                                placeholder="Search..." 
                                aria-label="Search"
                                aria-describedby="search"
                                
                                value={input}
                                onChange={(e) => setInput(e.target.value)}>
                        </input>
                        <div className="input-group-append px-3 py-2">
                            <span className="text-secondary"
                                  id="search">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </form>

            {input && <SearchResult input = {input} />}

        </div>
    )
}

export default SearchBar;