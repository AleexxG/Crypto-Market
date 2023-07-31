import { AllCurrencies } from '../../helpers/AllCurrencies';
import Select from 'react-select';

function Currency({ currency, setCurrency }) {
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
            backgroundColor: '#313449',
            border: 'none',
            boxShadow: 'none',
            '&:active': {
                boxShadow: 'none',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#313449' : '#212336',
            color: state.isSelected ? 'white' : '#6c757d',
            '&:active': {
                backgroundColor: '#dc3545',
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
            backgroundColor: '#212336',
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

export default Currency;