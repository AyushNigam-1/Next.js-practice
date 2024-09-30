import React from 'react'

const ShopDetails = () => {
    return (
        <div className='flex  items-center flex-col gap-8'>
            <h1 className='text-2xl font-semibold text-gray-300 text-center' >
                About Shop
            </h1>
            <div className='flex gap-4'>
                <div className='bg-primary p-2 rounded-md' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-2xl font-bold text-gray-300'>
                        Shri Ram Deri
                    </h3>
                    <p className='text-gray-400' >General Merchant Shop</p>
                </div>
            </div>
        </div>
    )
}

export default ShopDetails