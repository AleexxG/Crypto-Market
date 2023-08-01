import { AllCurrencies } from '../currency/AllCurrencies';
import { useCurrency } from '../currency/CurrencyContext';
import Select from 'react-select';

function CurrencySelect() {
    const { currency, setCurrency } = useCurrency();

    const mapCurrencies = () => {
        const options = AllCurrencies.map(currencyOption => ({
            value: currencyOption, 
            label: (
                <div className='d-flex align-items-center gap-3'>
                    <img src={`https://flagcdn.com/${currencyOption.slice(0, -1)}.svg`}
                         alt='Country flag'
                         style={{width: 20}}>
                    </img>
                    <p>{currencyOption.toUpperCase()}</p>
                </div>
            ),
        }));

        return options;
    };

    const defaultOption = mapCurrencies().find(option => option.value === currency);

    const handleCurrencyChange = (selectedOption) => {
        setCurrency(selectedOption.value);
    };

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

    return (
        <div className='col-lg-3'>
            <Select
                options = {mapCurrencies()} 
                styles = {customStyles}
                onChange = {handleCurrencyChange}
                defaultValue={defaultOption}
            />
        </div>
)
}

export default CurrencySelect;