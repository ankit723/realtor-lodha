import React from 'react'

const Price = () => {
    return (
        <div>
            <div className="plans-container">
                <div className="plans-title">
                    <div className="image-title-wrapper">
                        <img src="information-image-url.jpg" alt="Crown Taloja" className="section-image" />
                        <h1 className='text-left text-3xl font-semibold'> <span className='text-black'> Plans </span> <br />& Prices</h1>
                    </div>
                </div>

                <div className="plans-box-container">
                    {/* Plan 1 */}
                    <div className="plan-box">
                        <h3>Type</h3>
                        <p className='text-black font-bold text-xl mb-5'>1 BED</p>
                        <h3>Starting</h3>
                        <p className='text-black font-bold text-xl'>₹ 31.99 Lacs+</p>
                        <button className="details-button">View Details</button>
                    </div>

                    {/* Plan 2 */}
                    <div className="plan-box">
                        <h3>Type</h3>
                        <p className='text-black font-bold text-xl mb-5'>2 BED</p>
                        <h3>Starting</h3>
                        <p className='text-black font-bold text-xl'>₹ 48.99 Lacs+</p>
                        <button className="details-button">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price