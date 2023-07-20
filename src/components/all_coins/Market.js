import { useState } from 'react'
import Market_data from './market/Market_data'
import Exchanges from './market/Exchanges'
import Follow_us from './market/Follow_us'

function Market() {
    const [status, set_status] = useState({
        is_loading: false,
        error: null,
    })

    return (
        <section className='gradient pt-md-4 pt-3 pb-5'>
            <div className='container py-4 d-flex flex-md-row flex-column justify-content-between gap-3'>
                
                <Market_data 
                    status = {status}
                    set_status = {set_status}
                />

                <Exchanges />
                
                <Follow_us />

            </div>
        </section>
    )
}

export default Market