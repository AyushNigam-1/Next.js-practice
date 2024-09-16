import React from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const SearchBar = () => {
    return (
        <div className='container mx-auto flex flex-col gap-10 items-center h-[550px] justify-center' >
            <h1 className='text-7xl font-bold' >Search Products</h1>
            <div className='flex'>
            <Input className='bg-gray-800 border-none rounded-s-full rounded-e-none h-16 w-[1000px] shadow-md text-2xl  ' placeholder='e.g Soap , Tea , Shampoo, ...' />
            <Button className='h-16 text-xl rounded-s-none rounded-e-full'> Search </Button>
            </div>
            <h1 className='text-2xl font-semibold'>Recent Searches</h1>
            <div className='flex gap-5'>
            {
                Array(8).fill(8).map(() => {
                    return (
                        <Button key={Math.random()}  className='bg-gray-800 text-2xl text-gray-400' > 
                         <Image alt='logo' className='me-2' width={25} height={25} src="https://img.icons8.com/fluency/50/search.png" />
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