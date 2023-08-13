import './coinsTable.css';
import Error from "../Error";
import Loading from "../Loading";
import CoinsRow from "./coins_table/CoinsRow";
import Pagination from "./coins_table/Pagination";

function CoinsTable({
    coins,
    currentPage,
    setCurrentPage,
    totalPages,
    navigate,
    status
}) {

    const handlePageClick = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
        navigate(`/page/${page}`);
        window.scrollTo(0, 0);
    };

    return (
        <section className='table_section container'>
            <div className="table-responsive shadow p-3 mb-5 rounded color_table">
                <table className="coins_table">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Market Cap</td>
                            <td>Supply</td>
                            <td>Volume (24Hr)</td>
                            <td>Change (24Hr)</td>
                        </tr>
                    </thead>

                    {!status.loading && !status.error && (
                        <tbody>
                            {coins.map(coin => {
                                return (
                                <CoinsRow
                                    key = {coin.id}
                                    coin = {coin}
                                />
                                )
                            })}
                        </tbody>
                    )}

                </table>

                {status.loading && <Loading />}

                {status.error && <Error error = {status.error}/>}
            
            </div>

            <Pagination 
                currentPage = {currentPage}
                totalPages = {totalPages}
                handlePageClick = {handlePageClick}
            />
            
        </section>
    )
}

export default CoinsTable;