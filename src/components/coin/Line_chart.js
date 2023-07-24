import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Line_chart({ chart, days }) {

    const chart_data = chart.map(price => {
        const [time, price_at_time] = price

        const date = new Date(time);
        const hours = `${date.getHours() % 12 || 12} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;

        if (days === 1) {
            return {
                Time: hours,
                Price: price_at_time,
            };
        }
        else if (days === 365) {
            return {
                Time: date.toLocaleString('default', { month: 'short' }),
                Price: price_at_time,
            };
        }
        else {
            return {
                Time: `${date.getMonth() + 1}/${date.getDate()}`,
                Price: price_at_time,
            };
        }   
    });

    const min_price = Math.min(...chart_data.map((data) => data.Price));
    const max_price = Math.max(...chart_data.map((data) => data.Price));
    const y_domain = [Math.floor(min_price), Math.ceil(max_price)];

    let numberOfTicks = 8;

    if (days === 1) {
        numberOfTicks = 8;
    } 
    else if (days === 7) {
        numberOfTicks = 7;
    }
    else {
        numberOfTicks = 12
    }

    const tickInterval = Math.ceil(chart_data.length / numberOfTicks);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="p-3 rounded-2 shadow" style={{background: '#181a29'}}>
                    <p className='mb-2'>{days === 1 ? '🕛 Time' : '📅 Date'}: {data.Time}</p>
                    <p>{`💵 Price: ${data.Price}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div style={{ width: '100%', height: 500, }}>
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
                    <XAxis dataKey="Time" interval={tickInterval} />
                    <YAxis domain={y_domain} orientation="right" />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="Price" stroke="#45b0a9" fill="#96fff810" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Line_chart