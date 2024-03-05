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
    
    const totalPages = 100;
    
    useEffect(() => {
        if (!isNaN(parsedPageNumber) && parsedPageNumber <= totalPages) {
            setCurrentPage(parsedPageNumber);
        }
        else if (parsedPageNumber > totalPages || parsedPageNumber < 1) {
            navigate('/');
            setCurrentPage(1);
        }
        else {
            setCurrentPage(1);
        }

        const fetchCoins = async () => {
            try {
                setStatus({ loading: true });

                const response = await fetch (
                    `http://127.0.0.1:8000/api/coins/list?currency=${currency.toLowerCase()}&page=${currentPage}`
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