import { useCurrency } from '../../../contexts/CurrencyContext.jsx';
import NumberFormatter from '../../../helpers/NumberFormatter.js';
import TooltipStyle from './TooltipStyle.jsx';
import { 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer 
} from 'recharts';


function getTicks (days) {
    const isSmallScreen = window.innerWidth <= 768;

    switch (days) {
        case 1:
            return isSmallScreen ? 4 : 8;
        case 7:
            return isSmallScreen ? 4 : 7;
        default:
            return isSmallScreen ? 4 : 13;
    }
}

function formatTime (date, hours, days) {
    if (days === 1) {
        return hours;
    } else if (days === 365) {
        return date.toLocaleString('default', { month: 'short' });
    } else {
        return `${date.getMonth() + 1}/${date.getDate()}`;
    }
};


function LineChart({ chart, days }) {
    const { currency } = useCurrency();
    const formatter = new NumberFormatter(currency);

    function mapChartData(time, priceAtTime, days) {
        let priceFormat = formatter.format(
            priceAtTime, 
            formatter.priceOptions(priceAtTime)
        );

        const date = new Date(time);
        const hours = `${date.getHours() % 12 || 12} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
        
        return {
            Time: formatTime(date, hours, days),
            Price: priceAtTime,
            Formated_price: priceFormat,
        }; 
    }

    const chartData = chart.map(([time, priceAtTime]) => mapChartData(time, priceAtTime));

    const minPrice = Math.min(...chart.map((data) => data.Price));
    const maxPrice = Math.max(...chart.map((data) => data.Price));
    const yDomain = [Math.floor(minPrice), Math.ceil(maxPrice)];

    const numberOfTicks = getTicks(days)
    const tickInterval = Math.ceil(chartData.length / numberOfTicks);

    const formatYAxisLabel = (price) => formatter.format(price, formatter.bigNumberOptions());

    return (
        <div style={{ width: '100%', height: 380 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={chartData}
                    margin={{
                        top: 50,
                        right: 0,
                        left: 20,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid stroke="#ffffff12" />
                    <XAxis dataKey="Time" interval={tickInterval} />
                    <YAxis domain={yDomain} tickFormatter={formatYAxisLabel} orientation="right" />
                    <Tooltip content={<TooltipStyle days = {days} />} />
                    <Area type="monotone" dataKey="Price" stroke="var(--color-accent)" fill="var(--color-chart)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChart;