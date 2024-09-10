import React from 'react'
import BookCard from './BookCard'
import { Book } from '@/types'
const ProductList = async () => {
  const response = await fetch(`https://www.dbooks.org/api/recent`,{
    next:{
      revalidate:3600
    }
  })
  if (!response.ok) {
    throw new Error('An error occurred while fetching the books')
  }
  let books = await response.json()
  books = books.books
  return (
    <div className='grid grid-cols-3 gap-8 md:grid-cols-3 max-w-7xl mx-auto'>
      {books.map((book: Book ) => (
      <BookCard key={book.id} book={book} />
    ))}
    </div>
  )
}

export default ProductList