import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookCard = ({book}:{book:Book}) => {
  return (
    <div className='flex gap-5 border p-5 shadow-md'>
        <Image src={book.image} alt={book.title} width={200} height={300}  />
        <div>
          <h2 className='line-clamp-2 text-xl font-bold text-primary-600 text-balance' >{book.title}</h2>
          <p>{book.authors}</p>
          <Link href={`/book/${book.id}`}
          className='py-1 px-2 rounded border border-primary-500 mt-2 inline-block text-primary-500 font-medium text-sm hover:border-primary-100 hover:bg-primary-100 transition'>Read More</Link>
        </div>
    </div>
  )
}

export default BookCard