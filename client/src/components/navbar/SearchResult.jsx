import { useEffect, useState } from "react";
import DisplayContent from '../../helpers/DisplayContent.jsx';
import { Link } from "react-router-dom";

function SearchResult({ searchInput, searchResults, setSearchResults }) {
    const [status, setStatus] = useState({
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                setStatus({ loading: true });

                const response = await fetch(
                    `http://127.0.0.1:8000/api/coins/search?query=${searchInput}`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setSearchResults(data);
                setStatus({ loading: false });
            }
            catch (error) {
                setStatus({ loading: false, error: error });
                setSearchResults([]);
            }
        };

        fetchSearch();
    }, [searchInput, setSearchResults]);

    function mapSearch() {
        const mappedSearch = searchResults.map(coin => (
            <Link to={`/coins/${coin.slug}`} key={coin.slug}>
                <div className="link my-3 p-2 rounded-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src={coin.image} alt={`${coin.name} logo`} style={{maxWidth: '30px'}}></img>
                        <p className="ms-2 text-white">
                            {coin.name} 
                            <span className="ms-2 fw-normal text-secondary">{coin.symbol}</span>
                        </p>
                    </div>

                    <p className="text-secondary">#{coin.market_cap_rank}</p>
                </div>
            </Link>
        ));

        if (searchInput && searchResults.length === 0) {
            return (
                <div className="text-center py-5 px-2">
                    <i className="fa-solid fa-magnifying-glass fs-2 mb-4 text-secondary"></i>
                    <h3 className="fs-5">No results for '{searchInput}'</h3>
                    <p>We couldn't find anything matching your search. Try again with a different term.</p>
                </div>
            )
        }
        else return mappedSearch;
    }

    return (
        <div className="position-absolute color_bg w-100 rounded-2 px-2 py-2 mt-2 shadow"
             style={{maxHeight: 300, overflowY: 'auto', zIndex: 100}}>

            {DisplayContent(status.loading, status.error,
                mapSearch()
            )}

        </div>
    )
}

export default SearchResult;