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


const map_chart_data = (time, price_at_time, days) => {
    const formatter = new NumberFormatter('usd');
    
    const price_format = formatter.format(
        price_at_time, 
        formatter.priceOptions()
    );

    const date = new Date(time);
    const hours = `${date.getHours() % 12 || 12} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;

    if (days === 1) {
        return {
            Time: hours,
            Price: price_at_time,
            Formated_price: price_format,
        };
    }
    else if (days === 365) {
        return {
            Time: date.toLocaleString('default', { month: 'short' }),
            Price: price_at_time,
            Formated_price: price_format,
        };
    }
    else {
        return {
            Time: `${date.getMonth() + 1}/${date.getDate()}`,
            Price: price_at_time,
            Formated_price: price_format,
        };
    }   
};

const get_number_of_ticks = (days) => {
    switch (days) {
        case 1:
            return 8;
        case 7:
            return 7;
        default:
            return 12;
    }
};

const Custom_tooltip = ({ active, payload, days }) => {
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
    const chart_data = chart.map(([time, price_at_time]) => map_chart_data(time, price_at_time, days));

    const min_price = Math.min(...chart.map((data) => data.Price));
    const max_price = Math.max(...chart.map((data) => data.Price));
    const y_domain = [Math.floor(min_price), Math.ceil(max_price)];

    const number_of_ticks = get_number_of_ticks(days)
    const tick_interval = Math.ceil(chart_data.length / number_of_ticks);

    return (
        <div style={{ width: '100%', height: 380 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={chart_data}
                    margin={{
                        top: 50,
                        right: 0,
                        left: 20,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid stroke="#ffffff12" />
                    <XAxis dataKey="Time" interval={tick_interval} />
                    <YAxis domain={y_domain} orientation="right" />
                    <Tooltip content={<Custom_tooltip days = {days} />} />
                    <Area type="monotone" dataKey="Price" stroke="#45b0a9" fill="#96fff810" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChart;