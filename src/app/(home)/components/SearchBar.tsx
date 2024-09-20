import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
const SearchBar = () => {
    return (
        <div className='container mx-auto flex flex-col gap-10 items-center h-[550px] justify-center' >
            <h1 className='text-7xl font-bold' >Search Products</h1>
            <div className='flex'>
                <Input className='bg-primary border-none rounded-s-full rounded-e-none h-16 w-[1000px] ps-5 shadow-md text-2xl  ' placeholder='e.g Soap , Tea , Shampoo ...' />
                <Button className='h-16 text-xl rounded-s-none rounded-e-full'> Search </Button>
            </div>
            <h1 className='text-2xl font-semibold'>Recent Searches</h1>
            <div className='flex gap-5'>
                {
                    Array(8).fill(8).map(() => {
                        return (
                            <Button key={Math.random()} className='bg-primary text-2xl text-gray-400' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                Soap
                            </Button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchBar