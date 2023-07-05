import React from 'react'

function Market_data() {
    return (
        <article className='color_bg w-100 rounded-2 px-4 py-3'>
            <h5 className='border-bottom pb-3'>📊 Today's Market</h5>
            <ul className='list-unstyled'>
                <li className='mt-4'>Total market cap :</li>
                <li className='mt-4'>Volume :</li>
                <li className='mt-4'>Bitcoin dominance :</li>
            </ul>
        </article>
    )
}

export default Market_data