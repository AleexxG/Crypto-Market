import './coinsTable.css';
import Error from "../Error";
import Loading from "../Loading";
import CoinsRow from "./coins_table/CoinsRow";
import Pagination from "./coins_table/Pagination";

function CoinsTable({
    coins,
    current_page,
    set_current_page,
    total_pages,
    navigate,
    status
}) {

    const handle_page_click = (e, page) => {
        e.preventDefault();
        set_current_page(page);
        navigate(`/page/${page}`);
        window.scrollTo(0, 0);
    };

    return (
        <section className='table_section container'>
            <div className="table-responsive shadow p-3 mb-5 rounded color_bg">
                <table className="coinsTable">
                    <thead>
                        <tr>
                            <td scope="col">#</td>
                            <td scope="col">Name</td>
                            <td scope="col">Price</td>
                            <td scope="col">Market Cap</td>
                            <td scope="col">Supply</td>
                            <td scope="col">Volume (24Hr)</td>
                            <td scope="col">Change (24Hr)</td>
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

                {status.is_loading && <Loading />}

                {status.error && <Error error = {status.error}/>}
            
            </div>

            <Pagination 
                current_page = {current_page}
                total_pages = {total_pages}
                handle_click = {handle_page_click}
            />
            
        </section>
    )
}

export default CoinsTable;