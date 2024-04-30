import { useEffect, useState } from 'react';
import { useCurrency } from '../../contexts/CurrencyContext';
import Select from 'react-select';
import selectorStyle from './SelectorStyle';

function CurrencySelect() {
    const { currency, setCurrency } = useCurrency();
    const [supportedCurrencies, setSupportedCurrencies] = useState([]);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const apiUrl = import.meta.env.VITE_REACT_APP_COINPULSE_API_URL;
                const response = await fetch(`${apiUrl}/supported-currencies`);

                if (!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();
                setSupportedCurrencies(data);
            }
            catch (error) {
                setSupportedCurrencies([]);
            }
        };
        fetchCurrencies();
    }, []);

    const defaultCurrencyOption = supportedCurrencies.find(option => option.code === currency);

    function handleCurrencyChange(selectedOption) {
        localStorage.setItem('currency', selectedOption.value);
        setCurrency(selectedOption.value);
    }

    const renderCurrencyOption = (currency) => (
        <div className='d-flex align-items-center gap-3' style={{ cursor: 'pointer' }}>
            <img src={currency.flag} alt='Country flag' style={{ width: 20 }} />
            <p>{currency.code}</p>
        </div>
    );

    return (
        <div className='col-lg-3'>
            <Select
                options = {supportedCurrencies.map(currency => ({
                    value: currency.code,
                    label: renderCurrencyOption(currency)
                }))}
                styles = {selectorStyle}
                onChange = {handleCurrencyChange}
                value={defaultCurrencyOption && {
                    value: defaultCurrencyOption.code,
                    label: renderCurrencyOption(defaultCurrencyOption)
                }}
            />
        </div>
    )
}

export default CurrencySelect;