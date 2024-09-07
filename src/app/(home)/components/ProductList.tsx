import { Book } from '@/types'
import React from 'react'
import BookCard from './BookCard'

const ProductList = ({books}:{books:Book[]}) => {
  return (
books.map(book => {
<BookCard key={book._id} book={book}/>
})
  )
}

export default ProductList