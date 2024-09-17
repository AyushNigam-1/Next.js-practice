"use client";
import { useParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
const Page = () => {
    const params = useParams();
    const category = params.category; // Access dynamic route parameter
    const groceryProducts = [
        {
            name: "Apples",
            quantity: "1 kg",
            size: "Medium",
            available: true,
            price: 3.99,
            estimatedDeliveryTime: "2 days",
            shopAddress: "123 Market Street, City Center",
            phoneNumber: "+1-234-567-8901",
        },
        {
            name: "Rice",
            quantity: "5 kg",
            size: "Large",
            available: true,
            price: 15.99,
            estimatedDeliveryTime: "3 days",
            shopAddress: "456 Grocery Lane, Uptown",
            phoneNumber: "+1-345-678-9012",
        },
        {
            name: "Milk",
            quantity: "1 liter",
            size: "Regular",
            available: false,
            price: 1.99,
            estimatedDeliveryTime: "1 day",
            shopAddress: "789 Dairy Road, Suburb",
            phoneNumber: "+1-456-789-0123",
        },
        {
            name: "Eggs",
            quantity: "12 pieces",
            size: "Large",
            available: true,
            price: 2.49,
            estimatedDeliveryTime: "Same day",
            shopAddress: "101 Farm Lane, Countryside",
            phoneNumber: "+1-567-890-1234",
        },
        {
            name: "Bread",
            quantity: "1 loaf",
            size: "Standard",
            available: true,
            price: 2.99,
            estimatedDeliveryTime: "2 days",
            shopAddress: "202 Bakery Avenue, Downtown",
            phoneNumber: "+1-678-901-2345",
        },
        {
            name: "Bananas",
            quantity: "1 dozen",
            size: "Small",
            available: false,
            price: 1.89,
            estimatedDeliveryTime: "3 days",
            shopAddress: "303 Fruit Market, Old Town",
            phoneNumber: "+1-789-012-3456",
        },
        {
            name: "Tomatoes",
            quantity: "2 kg",
            size: "Medium",
            available: true,
            price: 4.99,
            estimatedDeliveryTime: "2 days",
            shopAddress: "404 Veggie Street, Greenfield",
            phoneNumber: "+1-890-123-4567",
        },
        {
            name: "Potatoes",
            quantity: "3 kg",
            size: "Large",
            available: true,
            price: 6.49,
            estimatedDeliveryTime: "2 days",
            shopAddress: "505 Root Road, Riverside",
            phoneNumber: "+1-901-234-5678",
        }
    ];
    return (
        <div className='container mx-auto flex flex-col gap-7 text-center'>
            <h2 className='text-3xl font-bold' >Choose Product</h2>
            <div className='grid grid-cols-4 gap-8 '>
                {
                    groceryProducts.map((item) => (
                        <Link href={`/products/${item.name}`} key={item.name}>
                            <Card className="w-[350px] bg-gray-800 border-none" >
                                <CardHeader>
                                    <Image src="https://img.icons8.com/bubbles/300/ingredients.png" alt="Logo" width={300} height={300} />
                                </CardHeader>
                                <CardContent >
                                    <div className='flex items-center gap-2 justify-between'>
                                        <h4 className='text-2xl font-semibold text-center text-white'>
                                            {item.name}
                                        </h4>
                                        <h4 className='text-2xl font-semibold text-center text-white' > ${item.price}</h4>
                                    </div>
                                    <div className='flex items-center my-2 justify-between' >
                                        <div>
                                            {item.available ? <div className='flex items-center gap-1 justify-center text-green-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg> <p>
                                                    Available
                                                </p>
                                            </div> : <div className='flex items-center gap-1 justify-center text-red-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                                <p>
                                                    Not Available
                                                </p>
                                            </div>
                                            }
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <p className='text-gray-200' >
                                                {item.estimatedDeliveryTime}</p>
                                        </div>
                                    </div>
                                    <Link href="" className='text-gray-200 flex gap-1 items-center justify-center' > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                    </svg>
                                        {item.shopAddress}  </Link>
                                </CardContent>
                            </Card>
                        </Link>
                    ))
                }
            </div>


        </div>
    );
};

export default Page;
