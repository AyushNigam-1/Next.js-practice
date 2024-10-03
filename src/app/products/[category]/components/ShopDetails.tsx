import { Button } from '@/components/ui/button'
import React from 'react'

const ShopDetails = () => {
    return (
        <div className='flex flex-col gap-2 bg-primary p-4  rounded-lg'>
            <div className='flex gap-4 items-center'>
                {/* <div className='bg-primary rounded-md w-min p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div> */}
                <div className='text-center'>
                    <h3 className='text-2xl font-bold text-gray-300'>
                        The Cozy Corner
                    </h3>
                    <p className='text-gray-400'>General Merchant Shop</p>
                </div>
            </div>

            <div className='flex-grow flex flex-col gap-3'>
                <div className='flex  gap-10'>
                    <span>
                        <p className='text-lg text-gray-300'>Owner</p>
                        <h5 className='font-semibold text-xl'>John Doe</h5>
                    </span>
                    <span>
                        <p className='text-lg text-gray-300'>Ratings</p>
                        <h5 className='font-semibold text-xl flex items-center gap-1'>5</h5>
                    </span>
                    <span>
                        <p className='text-lg text-gray-300'>Address</p>
                        <h5 className='font-semibold text-xl'>789 Pine Road, London, EC1A 1BB, UK</h5>
                    </span>
                </div>
                <div className='flex  gap-10'>
                    <span>
                        <p className='text-lg text-gray-300'>Contact No. / Whatsapp No.</p>
                        <h5 className='font-semibold text-xl'>+91 9696326695</h5>
                    </span>
                    <span>
                        <p className='text-lg text-gray-300'>Active Hours</p>
                        <h5 className='font-semibold text-xl'>10:00 AM - 10:00 PM</h5>
                    </span>
                </div>
                <div className='flex gap-3'>
                    <Button className='bg-[] mt-auto text-lg p-6 flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Visit Shop
                    </Button>
                    <Button className='bg-primary text-lg p-6 flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                        Contact Now
                    </Button>
                </div>
            </div>
        </div>


    )
}

export default ShopDetails