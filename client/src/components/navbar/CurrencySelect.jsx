import { useEffect, useState } from 'react';
import { useCurrency } from '../../currency/CurrencyContext';
import Select from 'react-select';


const customStyles = {
    control: (provided) => ({
        ...provided,
        cursor: 'pointer',
        backgroundColor: 'var(--color-input)',
        border: 'none',
        boxShadow: 'none',
        '&:active': {
            boxShadow: 'none',
        },
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'var(--color-input)' : 'var(--color-bg)',
        color: state.isSelected ? 'white' : '#6c757d',
        '&:active': {
            backgroundColor: 'var(--color-input)',
            color: 'white',
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: 'white',
        '&:hover': {
            color: 'white',
        },
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: 'var(--color-bg)',
    }),
};


function CurrencySelect() {
    const { currency, setCurrency } = useCurrency();
    const [supportedCurrencies, setSupportedCurrencies] = useState([]);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await fetch(
                    'http://127.0.0.1:8000/api/supported-currencies'
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

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
                styles = {customStyles}
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