import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
const Categories = () => {
  return (
    <div className='container mx-auto flex flex-col gap-7 text-center'>
      <h2 className='text-3xl font-bold' >Choose Category</h2>
      <div className='grid grid-cols-4 gap-8 '>
        {
          Array(8).fill(0).map((item) => (
            <Link href={`/products/${item}`}>
              <Card className="w-[350px] bg-primary border-none" key={item}>
                <CardHeader>
                  <Image src="https://img.icons8.com/bubbles/300/ingredients.png" alt="Logo" width={300} height={300} />
                </CardHeader>
                <CardContent >
                  <h4 className='text-2xl font-semibold text-center text-white mb-2'>
                    Groceries
                  </h4>
                  <div className='flex items-center gap-2 justify-center bg-green-800 rounded-full p-1' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-100">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className='text-green-100 m-0 p-0 text-sm' >Found 15+ Products in 10 Shops Nearby</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        }
      </div>


    </div>
  )
}

export default Categories