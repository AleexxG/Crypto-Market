class NumberFormatter {
    constructor(currency) {
        this.currency = currency;
    }
  
    format(value, options) {
        const formatOptions = { ...options };
        const format = new Intl.NumberFormat(undefined, formatOptions);
        return format.format(value);
    }
  
    priceOptions() {
        return {
            currency: this.currency,
            style: 'currency',
            maximumFractionDigits: 2,
        };
    }
  
    bigPriceOptions() {
        return {
            currency: this.currency,
            style: 'currency',
            maximumFractionDigits: 2,
            notation: 'compact',
        };
    }
  
    bigNumberOptions() {
        return {
            maximumFractionDigits: 2,
            notation: 'compact',
        };
    }
}

export default NumberFormatter;