import { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
    function currencyValue() {
        const storedCurrency = localStorage.getItem('currency');
        return storedCurrency || 'usd';
    }

    const [currency, setCurrency] = useState(currencyValue);

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
            {children}
        </CurrencyContext.Provider>
    )
}

export function useCurrency() {
    const context = useContext(CurrencyContext);

    if (context === undefined) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    
    return context;
}