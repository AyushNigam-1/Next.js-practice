import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const Categories = () => {
  return (
    <div className='container mx-auto flex flex-col gap-7 text-center'>
      <h2 className='text-3xl font-bold' >Choose Category</h2>
      <div className='grid grid-cols-4 gap-8 '>
        {
          Array(8).fill(0).map((item) => (
            <Card className="w-[350px] bg-gray-800 border-none" key={item}>
              <CardHeader>
                <Image src="https://img.icons8.com/bubbles/300/ingredients.png" alt="Logo" width={300} height={300} />
              </CardHeader>
              <CardContent >
                <h4 className='text-2xl font-semibold text-center text-white'>
                  Groceries
                </h4>
                <div className='flex items-center gap-2 justify-center' >
                <img width="15" height="15" src="https://img.icons8.com/fluency/15/checkmark.png" alt="checkmark"/>
                <p className='text-green-400 m-0 p-0 text-sm' >Found 15+ Products in 10 Shops Nearby</p>
                </div>
              </CardContent>
            </Card>
          ))
        }
      </div>


    </div>
  )
}

export default Categories