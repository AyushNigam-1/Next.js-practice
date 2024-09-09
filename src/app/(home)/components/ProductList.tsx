import { Book } from '@/types'
import React from 'react'
import BookCard from './BookCard'

const ProductList = ({ books }: { books: Book[] }) => {
  return (
    <div className='grid grid-cols-3 gap-8 md:grid-cols-3 max-w-7xl mx-auto'>
   { books.map(book => (
      <BookCard key={book.id} book={book} />
    ))}
    </div>
  )
}

export default ProductList