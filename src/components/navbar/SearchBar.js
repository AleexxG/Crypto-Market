import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchResult from "./SearchResult";

function SearchBar() {
    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();

        if (searchResults.length > 0) {
            navigate(`/coins/${searchResults[0].id}`);
            setInput('');
        }
    }

    return (
        <div className="w-100 position-relative">
            <form onSubmit={formSubmit}>
                <div className="rounded-2" style={{background: 'var(--color-input)'}}>
                    <div className="input-group d-flex align-items-center">
                        <input className="search_input form-control border-0 text-white" 
                                style={{background: 'var(--color-input)'}} 
                                type="search" 
                                placeholder="Search..." 
                                aria-label="Search"
                                aria-describedby="search"
                                
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onFocus={() => setShowResults(true)}
                                onBlur={() => setShowResults(false)}>
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

            {input && showResults &&
                <SearchResult 
                    input = {input} 
                    searchResults = {searchResults} 
                    setSearchResults = {setSearchResults} 
                />
            }

        </div>
    )
}

export default SearchBar;