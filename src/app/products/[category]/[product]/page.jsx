"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button'
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
            <Card className="bg-gray-800 border-none">
                <Image src="https://img.icons8.com/bubbles/300/ingredients.png" alt="Logo" width={600} height={600} />
            </Card>
            <div className='flex flex-col gap-5' >
                <h3 className='text-xl font-semibold' >
                    Name
                </h3>
                <h3 className='text-3xl font-semibold' >
                    {product.name}
                </h3>
                <h3 className='text-xl font-semibold' >
                    Price
                </h3>
                <h3 className='text-3xl font-semibold' >
                    ${product.price}
                </h3>
                <h3 className='text-xl font-semibold' >
                    Size
                </h3>
                <div className='flex gap-3'>
                    {
                        ['Large', 'Medium', 'Small'].map(size => <Button> {size}  </Button>)
                    }
                </div>
                <h3 className='text-xl font-semibold' >
                    Shop
                </h3>
                <div className='flex gap-3'>
                    {
                        [{ name: "123 Market Street, City Center" }, { name: "404 Veggie Street, Greenfield" }].map(shop => <Card className="p-3 bg-gray-800 border-none text-white">
                            <div className='flex'>
                                {/* <div>

                                </div> */}
                                <div>
                                    <h3 className='text' >{shop.name}</h3>
                                    <h5> Price : $4.99 | Estimated Time : 45min </h5>
                                </div>
                            </div>
                        </Card>)
                    }
                </div>
                <div className='flex gap-3'>
                    <Button className="text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg> &nbsp;
                        Add To Favourites
                    </Button>
                    <Button className="text-xl">
                        Order Now
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default page