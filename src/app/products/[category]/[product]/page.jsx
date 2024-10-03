"use client"

import { useParams } from 'next/navigation';
import Item from '../components/Item';
import ShopList from '../components/ShopList';
import ShopDetails from '../components/ShopDetails';

const page = () => {
    const params = useParams();
    const product1 = params.product;
    return (
        <div className='flex flex-col gap-8 items-center'>
            {/* <div className='flex justify-around ' > */}
            <Item />
            {/* </div> */}
            <ShopList />
            <ShopDetails />
        </div>
    )
}

export default page