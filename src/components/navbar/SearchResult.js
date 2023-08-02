import { useEffect, useState } from "react";
import Loading from "../Loading";
import Error from "../Error";
import { Link } from "react-router-dom";

function SearchResult({ input, searchResults, setSearchResults }) {
    const [status, setStatus] = useState({
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setStatus({ loading: true });

                const response = await fetch(
                    `https://api.coingecko.com/api/v3/search?query=${input}`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setSearchResults(data.coins);
                setStatus({ loading: false, error: null });
            }
            catch (error) {
                setStatus({ loading: false, error: error });
                setSearchResults([]);
            }
        };

        fetchData();
    }, [input, setSearchResults]);

    const mapSearch = () => {
        const map = searchResults.map(coin => (
            <Link to={`/coins/${coin.id}`} key={coin.id}>
                <div className="link my-3 p-2 rounded-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src={coin.thumb} alt={`${coin.name} logo`}></img>
                        <h6 className="ms-2 text-white">
                            {coin.name} 
                            <span className="ms-2 fw-normal text-secondary">{coin.symbol}</span>
                        </h6>
                    </div>

                    <p className="text-secondary">#{coin.market_cap_rank}</p>
                </div>
            </Link>
        ));

        if (input && searchResults.length === 0) {
            return (
                <div className="text-center py-5 px-2">
                    <i className="fa-solid fa-magnifying-glass fs-2 mb-4 text-secondary"></i>
                    <h5>No results for '{input}'</h5>
                    <p>We couldn't find anything matching your search. Try again with a different term.</p>
                </div>
            )
        }
        else return map;
    };

    return (
        <div className="position-absolute color_bg w-100 rounded-2 px-2 py-2 mt-2 shadow"
             style={{maxHeight: 300, overflowY: 'auto', zIndex: 100}}>
            
            {status.loading && <Loading />}
            {status.error && <Error error = {status.error} />}

            {!status.loading && !status.error && mapSearch()}

        </div>
    )
}

export default SearchResult;