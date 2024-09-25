"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox';
const page = () => {
    const params = useParams();
    const product1 = params.product;
    const product = {
        name: "Apples",
        quantity: "1 kg",
        size: "Medium",
        available: true,
        price: 3.99,
        estimatedDeliveryTime: "2 days",
        shopAddress: "123 Market Street, City Center",
        phoneNumber: "+1-234-567-8901",
    }
    return (
        <div className='container mx-auto flex gap-6'>
            <Card className="bg-primary border-none">
                <Image src="https://img.icons8.com/bubbles/300/ingredients.png" alt="Logo" width={600} height={600} />
            </Card>
            <div className='flex flex-col gap-5' >
                <h3 className='text-xl text-gray-200' >
                    Name
                </h3>
                <h3 className='text-3xl font-semibold text-gray-300' >
                    {product.name}
                </h3>
                <h3 className='text-xl text-gray-200' >
                    Price
                </h3>
                <h3 className='text-3xl font-semibold text-gray-300' >
                    ${product.price}
                </h3>
                <h3 className='text-xl text-gray-200' >
                    Quantity
                </h3>
                <div className='text-3xl flex gap-2 font-semibold text-gray-300' >
                    {
                        [{ name: '2', isActive: true }, { name: '3', isActive: false }, { name: '4', isActive: false }].map(size => {
                            return <span key={size.name} className={`${size.isActive ? 'bg-green-900 border-2 border-green-300' : 'bg-primary'} flex rounded-md items-center py-1 px-4 gap-2  shadow-slate-100 `}>
                                <Button className='text-xl bg-transparent hover:bg-transparent m-0 p-0  text-gray-300 '>
                                    {size.name} </Button>
                            </span>
                        })
                    }
                </div>
                <h3 className='text-xl text-gray-200' >
                    Size
                </h3>
                <div className='flex gap-3'>
                    {
                        [{ name: 'Large', isActive: true }, { name: 'Medium', isActive: false }, { name: 'Small', isActive: false }].map(size => {
                            return <span key={size.name} className={`${size.isActive ? 'bg-green-900 border-2 border-green-300' : 'bg-primary'} flex rounded-md items-center py-1 px-4 gap-2  shadow-slate-100 `}>
                                <Button className='text-xl bg-transparent hover:bg-transparent m-0 p-0  text-gray-300 '> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                </svg>
                                    &nbsp;    {size.name} </Button>
                            </span>
                        })
                    }
                </div>
                <h3 className='text-xl text-gray-200' >
                    Shop
                </h3>
                <div className='flex gap-3'>
                    {
                        [{ name: "123 Market Street, City Center", isSelected: true }, { name: "404 Veggie Street, Greenfield", isSelected: false }].map(shop => <Card className={`p-3 bg-primary text-white ${shop.isSelected ? 'bg-green-900 border-2 border-green-300' : 'bg-primary border-none'}`}>
                            <div className='flex gap-3'>

                                <div>
                                    <h3 className='text-xl text-gray-300' > Price : $4.99 | Estimated Time : 45min</h3>
                                    <h5 className='text-lg text-gray-400 flex items-center gap-2' > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                    </svg>
                                        {shop.name}</h5>
                                </div>
                            </div>
                        </Card>)
                    }
                </div>
                <div className='flex gap-3 align-bottom'>
                    <Button className="  text-xl bg-primary p-6 text-gray-300 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg> &nbsp;
                        Add To Wishlist
                    </Button>
                    <Button className="text-xl bg-primary p-6 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg> &nbsp;
                        Add To Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default page