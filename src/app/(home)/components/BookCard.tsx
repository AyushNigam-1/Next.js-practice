import { Book } from '@/types'
import Image from 'next/image'
import React from 'react'

const BookCard = ({book}:{book:Book}) => {
  return (
    <div>
        
        <Image src={book.coverImage} alt={book.title} width={200} height={300} />
    </div>
  )
}

export default BookCard