import { 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer 
} from 'recharts';

import NumberFormatter from '../../helpers/NumberFormatter.js';


const mapChartData = (time, priceAtTime, days) => {
    const formatter = new NumberFormatter('usd');
    
    const priceFormat = formatter.format(
        priceAtTime, 
        formatter.priceOptions()
    );

    const date = new Date(time);
    const hours = `${date.getHours() % 12 || 12} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;

    if (days === 1) {
        return {
            Time: hours,
            Price: priceAtTime,
            Formated_price: priceFormat,
        };
    }
    else if (days === 365) {
        return {
            Time: date.toLocaleString('default', { month: 'short' }),
            Price: priceAtTime,
            Formated_price: priceFormat,
        };
    }
    else {
        return {
            Time: `${date.getMonth() + 1}/${date.getDate()}`,
            Price: priceAtTime,
            Formated_price: priceFormat,
        };
    }   
};

const getTicks = (days) => {
    switch (days) {
        case 1:
            return 8;
        case 7:
            return 7;
        default:
            return 12;
    }
};

const CustomTooltip = ({ active, payload, days }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="p-3 rounded-2 shadow" style={{background: '#181a29'}}>
                <p className='mb-2'>{days === 1 ? '🕛 Time' : '📅 Date'}: {data.Time}</p>
                <p>{`💵 Price: ${data.Formated_price}`}</p>
            </div>
        );
    }
    return null;
};


function LineChart({ chart, days }) {
    const chartData = chart.map(([time, priceAtTime]) => mapChartData(time, priceAtTime, days));

    const minPrice = Math.min(...chart.map((data) => data.Price));
    const maxPrice = Math.max(...chart.map((data) => data.Price));
    const yDomain = [Math.floor(minPrice), Math.ceil(maxPrice)];

    const numberOfTicks = getTicks(days)
    const tickInterval = Math.ceil(chartData.length / numberOfTicks);

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
                    <YAxis domain={yDomain} orientation="right" />
                    <Tooltip content={<CustomTooltip days = {days} />} />
                    <Area type="monotone" dataKey="Price" stroke="#45b0a9" fill="#96fff810" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChart;