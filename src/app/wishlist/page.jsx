import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const item = {
        name: "Roses",
        isActive: true,
        price: "456"
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-4'>Wishlist</h2>
            <div className='flex gap-4' >
                {
                    Array(5).fill(0).map(e =>
                        <Link href={`/products/0/${item.name}}`} key={item.name}>
                            <Card className="w-[350px] bg-primary border-none" >
                                <CardHeader>
                                    <Image src="https://img.icons8.com/bubbles/300/ingredients.png" alt="Logo" width={300} height={300} />
                                </CardHeader>
                                <CardContent className='flex flex-col gap-2' >
                                    <div className='flex justify-between' >

                                        <h4 className='text-2xl font-semibold text-center text-white'>
                                            {item.name}
                                        </h4>

                                        <div>
                                            {item.available ? <div className='flex gap-1 text-sm bg-green-800 py-0.5 px-2 rounded-full justify-center text-green-100 shadow-md'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                Available
                                            </div> : <div className='flex items-center gap-1 justify-center text-sm  text-red-100 bg-red-800 py-0.5 px-2 rounded-full shadow-md'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                Not Available
                                            </div>
                                            }
                                        </div>
                                    </div>
                                    <div className='flex gap-2 justify-between items-center'>
                                        <div className='flex gap-3 items-center' >
                                            <h4 className='text-4xl font-semibold text-center text-gray-200' > $ {item.price}</h4>
                                            <p className='text-gray-400 text-lg' > x 1 </p>
                                        </div>
                                        <div className='flex gap-3' >
                                            <button className='text-red-100  p-2 rounded-full'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default page