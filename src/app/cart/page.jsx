// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader } from '@/components/ui/card'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const page = () => {
//     const item = {
//         name: "Roses",
//         isActive: true,
//         price: "456"
//     }
//     return (
//         <div className='grid grid-cols-4 gap-4' >
//             <div className='col-span-3'>
//                 <h2 className='text-4xl font-bold text-center mb-4'>Cart</h2>
//                 <div className='flex gap-4' >
//                     {
//                         Array(1).fill(0).map(e =>
//                             <Link href={`/products`} key={item.name}>
//                                 <Card className="w-[350px] bg-primary border-none" >
//                                     <CardHeader>
//                                         <Image src="https://img.icons8.com/bubbles/300/ingredients.png" alt="Logo" width={300} height={300} />
//                                     </CardHeader>
//                                     <CardContent >
//                                         <div className='flex gap-2 justify-between items-center'>
//                                             <div className='flex flex-col gap-2'>
//                                                 <h4 className='text-2xl font-semibold  text-white text-left'>
//                                                     {item.name}
//                                                 </h4>
//                                                 <div>
//                                                     {item.available ? <div className='flex gap-1 text-sm bg-green-800 py-0.5 px-2 rounded-full justify-center text-green-100 shadow-md'>
//                                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
//                                                             <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//                                                         </svg> <p>
//                                                             Available
//                                                         </p>
//                                                     </div> : <div className='flex items-center gap-1 justify-center text-sm  text-red-100 bg-red-800 py-0.5 px-2 rounded-full shadow-md'>
//                                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
//                                                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
//                                                         </svg>
//                                                         <p>
//                                                             Not Available
//                                                         </p>
//                                                     </div>
//                                                     }
//                                                 </div>
//                                             </div>
//                                             <h4 className='text-4xl font-semibold text-center text-gray-200' > $ {item.price}</h4>
//                                         </div>
//                                         <div className='flex gap-2 mt-4 '>
//                                             <Button className='flex gap-1 bg-green-800 py-0.5 px-4 text-lg rounded-md justify-center text-green-100 shadow-md' >
//                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
//                                                 </svg>
//                                                 Notify Me When Available
//                                             </Button>
//                                             <Button className='flex gap-1 text-sm bg-red-800 py-0.5 px-2 rounded-md justify-center text-red-100 shadow-md' >
//                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
//                                                 </svg>
//                                             </Button>
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             </Link>)
//                     }
//                 </div>
//             </div>
//             <div className='flex gap-3 col-span-1 p-2 border-gray-500 border-s-2 h-[840px]'  >
//                 <h1 className='text-2xl' >
//                     Total : $35
//                 </h1>
//                 <Button className="text-xl bg-primary p-6 text-gray-300 w-100">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
//                     </svg> &nbsp;
//                     Place Order
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default page

import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const page = () => {
    const invoices = [
        {
            invoice: "INV001",
            paymentStatus: "Paid",
            totalAmount: "$250.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV002",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        },
        {
            invoice: "INV003",
            paymentStatus: "Unpaid",
            totalAmount: "$350.00",
            paymentMethod: "Bank Transfer",
        },
        // {
        //     invoice: "INV004",
        //     paymentStatus: "Paid",
        //     totalAmount: "$450.00",
        //     paymentMethod: "Credit Card",
        // },
        // {
        //     invoice: "INV005",
        //     paymentStatus: "Paid",
        //     totalAmount: "$550.00",
        //     paymentMethod: "PayPal",
        // },
        // {
        //     invoice: "INV006",
        //     paymentStatus: "Pending",
        //     totalAmount: "$200.00",
        //     paymentMethod: "Bank Transfer",
        // },
        // {
        //     invoice: "INV007",
        //     paymentStatus: "Unpaid",
        //     totalAmount: "$300.00",
        //     paymentMethod: "Credit Card",
        // },
    ]
    return (
        <div>
            <Table className='bg-primary w-[500px] container mx-auto h-96' >
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead></TableHead>
                        <TableHead className='text-2xl' >Item</TableHead>
                        <TableHead className="text-2xl text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium text-2xl">{invoice.invoice}</TableCell>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}

export default page