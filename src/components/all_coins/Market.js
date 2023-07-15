import React from 'react'
import Market_data from './market/Market_data'
import Exchanges from './market/Exchanges'
import Socials from './market/Socials'

function Market({ status, set_status }) {
    return (
        <section className='gradient pt-md-4 pt-3 pb-5'>
            <div className='container py-4 d-flex flex-md-row flex-column justify-content-between gap-3'>
                
                <Market_data 
                    status = {status}
                    set_status = {set_status}
                />

                <Exchanges 
                    status = {status}
                    set_status = {set_status}
                />
                
                <Socials />

            </div>
        </section>
    )
}

export default Market