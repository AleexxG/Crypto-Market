import React from 'react';

const TooltipStyle = ({ active, payload, days }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        const timeLabel = days === 1 ? '🕛 Time' : '📅 Date';
        return (
            <div className="p-3 rounded-2 shadow color_input">
                <p className='mb-2'>{timeLabel}: {data.Time}</p>
                <p>{`💵 Price: ${data.Formated_price}`}</p>
            </div>
        );
    }
    return null;
};

export default TooltipStyle;