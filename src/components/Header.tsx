'use client';
import Container from "./Container"
import Logo from "./Logo";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";

import { FiLogOut } from "react-icons/fi";
import { useSession,signIn,signOut } from "next-auth/react";
import Image from 'next/image';
import Link from "next/link";





const Header = () => {
  const {data: session} = useSession();
  // console.log(session);
  return (
    <div className='bg-bodyColor h-20 top-0 sticky z-50'>
    <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'>
        {/* {logo} */}
        <Logo />
        {/* Search Field */}
        <div className='searchDiv'>
            <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
            <input type="text" placeholder='search for products'
                className='placeholder:text-sm flex-1 outline-none' />
        </div>
        {/* Login/Register */}
        {!session && (
            <div
                onClick={() => signIn()}
                className='headerDiv'>
                <BsCart />
                <p className='text-sm font-semibold'>Login/Registar</p>
            </div>
        )}
        {/* Cart button */}
        <Link href={'/cart'}>
            <div className='cartDiv'>
                <BsCart className="text-xl" />
                <p className='text-sm font-semibold'>
                    $000
                </p>
                <span className='cartSpan'>
                    0
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
        {/* {
            orderData?.order?.length > 0 && session && (
                <Link href={"/order"} className='headerDiv px-2 gap-x-1 cursor-pointer'>
                <BsBookmark className="text-2xl"/>
                <p className='text-sm font-semibold'>Orders</p>
                </Link>
            )
        } */}

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