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

    const pageClick = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
        navigate(`/page/${page}`);
        window.scrollTo(0, 0);
    };

    return (
        <section className='table_section container'>
            <div className="table-responsive shadow p-3 mb-5 rounded color_bg">
                <table className="coinsTable">
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

                    <tbody>
                        {coins.map(coin => 
                        {
                            return (
                            <CoinsRow
                                key = {coin.id}
                                coin = {coin}
                            />
                            )
                        })}
                    </tbody>
                </table>

                {status.loading && <Loading />}

                {status.error && <Error error = {status.error}/>}
            
            </div>

            <Pagination 
                currentPage = {currentPage}
                totalPages = {totalPages}
                pageClick = {pageClick}
            />
            
        </section>
    )
}

export default CoinsTable;