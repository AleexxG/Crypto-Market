import { AllCurrencies } from '../../helpers/AllCurrencies';

function Currency({ currency, setCurrency }) {
    return (
        <div className='col col-lg-3'>
            <select className="form-select fw-bold text-secondary" 
                    style={{opacity: '15%'}}>
                {AllCurrencies.map(currency => (
                    <option value="currency">{currency.toUpperCase()}</option>
                ))}
            </select>
        </div>
)
}

export default Currency;