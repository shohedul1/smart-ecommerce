'use client';
import Container from "./Container"
import Logo from "./Logo";
// import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import { useEffect, useState } from "react";
import FormattedPrice from "./FormattedPrice";
import { addUser, deleteUser } from "@/redux/shoppingSlice";
import { BsBookmark } from "react-icons/bs";






const Header = () => {
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const { productData, orderData } = useSelector((state: StateProps) => state.shopping);
    console.log(orderData);

    useEffect(() => {
        if (session) {
            dispatch(
                addUser({
                    name: session?.user?.name,
                    email: session?.user?.email,
                    image: session?.user?.image,
                })
            );
        } else {
            dispatch(deleteUser());
        }
    }, [session, dispatch]);

    const [totalAmt, setTotalAmt] = useState(0);

    useEffect(() => {
        let amt = 0;
        productData.map((item: Products) => {
            amt += item?.attributes?.price * item?.attributes?.quantity
            return;
        });
        setTotalAmt(amt);
    }, [productData]);

    return (
         <div className='bg-bodyColor h-20 top-0 sticky z-50'>
         <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'>
             {/* {logo} */}
             <Logo />
             {/* Search Field */}
             {/* <div className='searchDiv'>
                 <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
                 <input type="text" placeholder='search for products'
                     className='placeholder:text-sm flex-1 outline-none' />
             </div> */}
             {/* Login/Register */}
             {!session && (
                 <div
                     onClick={() => signIn()}
                     className='headerDiv'>
                     <CiUser />
                     <p className='text-sm font-semibold'>Login/Registar</p>
                 </div>
             )}
             {/* Cart button */}
             <Link href={'/cart'}>
                 <div className='cartDiv'>
                     <BsCart className="text-xl" />
                     <p className='text-sm font-semibold'>
                         <FormattedPrice amount={ totalAmt ? totalAmt : 0} />
                     </p>
                     <span className='cartSpan'>
                         {productData ? productData?.length : 0}
                     </span>
                 </div>
             </Link>
             {/* {user Image} */}
             {
                 session && <Image
                     src={session?.user?.image as string}
                     alt='user image'
                     width={50}
                     height={50}
                     className='rounded-full object-cover' />
             }
             {/* Order button */}
             {
                 orderData?.order?.length > 0 && session && (
                     <Link href={"/order"} className='headerDiv px-2 gap-x-1 cursor-pointer'>
                     <BsBookmark className="text-2xl"/>
                     <p className='text-sm font-semibold'>Orders</p>
                     </Link>
                 )
             }

             {/* logout button */}
             {session && (
                 <div
                     onClick={() => signOut()}
                     className='headerDiv px-2 gap-x-2 cursor-pointer'>
                     <FiLogOut className="text-2xl" />
                     <p className='text-sm font-semibold'>Logout</p>
                 </div>
             )}

         </Container>
     </div>
    )
}

export default Header