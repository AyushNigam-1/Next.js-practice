"use client";
import { useParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
const Page = () => {
    const params = useParams();
    const category = params.category;
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
            <h2 className='text-3xl font-bold ' >Choose Product</h2>
            <div className='grid grid-cols-4 gap-8 '>
                {
                    groceryProducts.map((item) => (
                        <Link href={`/products/${category}/${item.name}`} key={item.name}>
                            <Card className="w-[350px] bg-primary border-none" >
                                <CardHeader>
                                    <Image src="https://img.icons8.com/bubbles/300/ingredients.png" alt="Logo" width={300} height={300} />
                                </CardHeader>
                                <CardContent className='flex flex-col gap-2' >
                                    <div className='flex justify-between' >
                                        <div className='flex gap-3 items-center' >
                                            <h4 className='text-2xl font-semibold text-center text-white'>
                                                {item.name}
                                            </h4>
                                            <p className='text-gray-400 text-lg' > x 1 </p>
                                        </div>
                                        <div>
                                            {item.available ? <div className='flex gap-1 text-sm bg-green-800 py-0.5 px-2 rounded-full justify-center text-green-100 shadow-md'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                Available
                                            </div> : <div className='flex items-center gap-1 justify-center text-sm  text-red-100 bg-red-800 py-0.5 px-2 rounded-full shadow-md'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                Not Available
                                            </div>
                                            }
                                        </div>
                                    </div>
                                    <div className='flex gap-2 justify-between items-center'>
                                        <h4 className='text-4xl font-semibold text-center text-gray-200' > $ {item.price}</h4>
                                        <div className='flex gap-3' >
                                            <button className='text-green-100 bg-green-800 p-2 rounded-full'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                                </svg>
                                            </button>
                                            <button className='text-red-100 bg-red-800 p-2 rounded-full'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
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
