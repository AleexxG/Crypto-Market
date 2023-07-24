import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Market from '../components/home/Market';
import CoinsTable from '../components/home/CoinsTable';

function Home() {
	const [coins, set_coins] = useState([]);
    const [current_page, set_current_page] = useState(1);
    const total_pages = 92;
    const navigate = useNavigate();
    const { page_number } = useParams();
    const parsed_page_number = parseInt(page_number, 10);
    const [status, set_status] = useState({
        is_loading: false,
        error: null,
    })

    useEffect(() => {
        if (!isNaN(parsed_page_number)) {
            parsed_page_number > total_pages ? 
            navigate('/') :
            set_current_page(parsed_page_number);
        }

        const fetch_coins = async () => {
            try {
                set_status({ is_loading: true });

                const response = await fetch (
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${current_page}&sparkline=false`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                set_coins(data);
                set_status({ is_loading: false, error: null });
            }
            catch (error) {
                set_status({ is_loading: false, error: error });
                set_coins([]);
            }
        };

        fetch_coins();
    }, [current_page]);

	return (
		<>
			<Market />

			<CoinsTable 
				coins = {coins}
				current_page = {current_page}
				set_current_page = {set_current_page}
				total_pages = {total_pages}
				navigate = {navigate}
				status = {status}
			/>
		</>
	)
}

export default Home