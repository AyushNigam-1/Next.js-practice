import React from 'react'

const ShopDetails = () => {
    return (
        <div className='flex  flex-col gap-2 bg-primary p-4 w-80 rounded-lg'>
            <div className='flex gap-4 items-center'>
                <div className='bg-[#0a0a0a] rounded-full w-min p-3' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
                <div>
                    <h3 className='text-2xl font-bold text-gray-300'>
                        The Cozy Corner
                    </h3>
                    <p className='text-gray-400' >General Merchant Shop</p>
                </div>

            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-lg text-gray-300'>Owner</p>
                <h5 className='font-semibold text-xl' >John Doe</h5>
                <p className='text-lg text-gray-300'>Ratings</p>
                <h5 className='font-semibold text-xl' >5</h5>
                <p className='text-lg text-gray-300'>Address</p>
                <h5 className='font-semibold text-xl' >789 Pine Road, London, EC1A 1BB, UKtext</h5>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus non voluptatem itaque fugiat quos. Nam, odit rerum. Necessitatibus accusantium quia doloribus id voluptatem, maiores veniam atque omnis assumenda maxime quis laborum autem molestias laudantium ipsum beatae, in tenetur porro! Ex quod earum quas soluta ad?
                </p> */}
            </div>
        </div>

    )
}

export default ShopDetails