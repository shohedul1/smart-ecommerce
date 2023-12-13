'use client';
import Image from 'next/image';
import { ItemProps } from "../../type";
import FormattedPrice from './FormattedPrice';
import { IoStar } from "react-icons/io5";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import toast,{Toaster} from 'react-hot-toast';
import { addToCart } from '@/redux/shoppingSlice';
import { calculatePerecentage } from '@/helpers';


const ProductsData = ({ item }: ItemProps) => {
    const dispatch = useDispatch();
    const startArray = Array.from({ length: item?.attributes?.rating }, (_, index) => (
        <span key={index} className='text-yellow-400'>
            <IoStar />
        </span>

    ));
    return (
        <div className='w-full rounded-lg overflow-hidden'>
            <div>
                <Link href={{pathname: "/product", query: { id: item?.id}}}>
                    <div className='w-full h-96 group overflow-hidden relative'>
                        <Image src={item?.attributes?.image?.data?.attributes?.url} alt='product image' height={500} width={500}
                            className='w-full h-full object-cover group-hover:scale-110 duration-200 rounded-lg' />
                        {item?.attributes?.isNew && <span className='absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full group-hover:bg-orange-600 group-hover:text-white bg-white duration-200'>New Arrival</span>}
                    </div>
                </Link>
                <div className='border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg'>
                    <p>{item?.attributes?.title}</p>
                    <div className='flex items-center justify-between'>
                        <div className='border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs'>
                            <p>{calculatePerecentage(item?.attributes?.price, item?.attributes?.oldPrice)}% off</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='text-slate-500 line-through text-sm'>
                                <FormattedPrice amount={item?.attributes?.oldPrice} />
                            </p>
                            <p className='font-semibold'>
                                <FormattedPrice amount={item?.attributes?.price} />
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        {/* add to cart button */}
                        <button onClick={()=> dispatch(addToCart(item)) && toast.success(
                            `${item?.attributes?.title.substring(0,15)} added successfully!`
                        )}
                        className='bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-orange-800 hover:text-white duration-200'>add to cart</button>
                        {/* star icons */}
                        <div className='flex items-center gap-x-1'>{startArray}</div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    )
}

export default ProductsData;