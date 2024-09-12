import { Book } from '@/types';
import React from 'react'
import DownloadButton from './components/DownloadButton';
import Image from 'next/image';

const SingleBookPage = async ({ params }: { params: { bookid: string } }) => {
    console.log('params', params);
    let book
    try {
        const response = await fetch(`https://www.dbooks.org/api/book/${params.bookid}`)
        if (!response.ok) {
            throw new Error('Error fetching book')
        }
        book = await response.json()
        console.log('book', book);
    } catch (error) {
        throw new Error('Error fetching book')
    }

    if (!book) {
        throw new Error('Book not found')
    }
    return (
        <div>
            <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
                <div className="col-span-2 pr-16 text-primary-950">
                    <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
                    <span className="font-semibold">by {book.authors}</span>
                    <p className="mt-5 text-lg leading-8">{book.description}</p>
                    <DownloadButton fileLink={book.download} />
                </div>
                <div className="flex justify-end">
                    <Image
                        src={book.image}
                        alt={book.title}
                        className="rounded-md border"
                        height={0}
                        width={0}
                        sizes="100vw"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SingleBookPage