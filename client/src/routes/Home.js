import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCurrency } from '../currency/CurrencyContext';
import Market from '../components/home/Market';
import CoinsTable from '../components/home/CoinsTable';

function Home() {
	const [coins, setCoins] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [status, setStatus] = useState({
        loading: false,
        error: null,
    });

    const { currency } = useCurrency();
    const navigate = useNavigate();
    const { pageNumber } = useParams();
    const parsedPageNumber = parseInt(pageNumber, 10);
    
    const totalPages = 92;
    
    useEffect(() => {
        if (!isNaN(parsedPageNumber) && parsedPageNumber <= totalPages) {
            setCurrentPage(parsedPageNumber);
        }
        else if (parsedPageNumber > totalPages || parsedPageNumber < 1) {
            navigate('/');
        }
        else {
            setCurrentPage(1);
        }

        const fetchCoins = async () => {
            try {
                setStatus({ loading: true });

                const response = await fetch (
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${currentPage}&sparkline=false`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setCoins(data);
                setStatus({ loading: false });
            }
            catch (error) {
                setStatus({ loading: false, error: error });
                setCoins([]);
            }
        };

        fetchCoins();
    }, [currentPage, parsedPageNumber, navigate, currency]);

	return (
		<>
			<Market />

			<CoinsTable
				coins = {coins}
				currentPage = {currentPage}
				setCurrentPage = {setCurrentPage}
				totalPages = {totalPages}
				navigate = {navigate}
				status = {status}
			/>
		</>
	)
}

export default Home;