import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCurrency } from '../currency/CurrencyContext';
import Market from '../components/home/Market';
import CoinsTable from '../components/home/CoinsTable';

function Home() {
	const [coins, setCoins] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [status, setStatus] = useState({loading: false, error: null});
    const navigate = useNavigate();
    const { currency } = useCurrency();
    const { pageNumber } = useParams();
    
    const totalPages = 100;
    const parsedPageNumber = parseInt(pageNumber, 10);

    useEffect(() => {
        if (!isNaN(parsedPageNumber) && parsedPageNumber <= totalPages) {
            setCurrentPage(parsedPageNumber);
        } else {
            navigate('/');
            setCurrentPage(1);
        }
    }, [parsedPageNumber, navigate, totalPages]);
    
    useEffect(() => {
        const fetchCoins = async () => {
            try {
                setStatus({ loading: true });

                const pageToFetch = !isNaN(parsedPageNumber) && parsedPageNumber <= totalPages
                ? parsedPageNumber
                : currentPage;

                const response = await fetch (
                    `http://127.0.0.1:8000/api/coins/list?currency=${currency.toLowerCase()}&page=${pageToFetch}`
                );

                if (!response.ok) throw new Error('Network response was not ok');

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
    }, [currentPage, parsedPageNumber, totalPages, currency]);

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