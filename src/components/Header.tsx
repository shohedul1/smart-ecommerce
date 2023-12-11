'use client';
import Container from "./Container"
import Logo from "./Logo";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { useSession,signIn,signOut } from "next-auth/react";
import Image from 'next/image';





const Header = () => {
  const {data: session} = useSession();
  // console.log(session);
  return (
    <div className="bg-bodyColor h-20">
        <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
            {/* logo */}
            <Logo/>
            {/* search */}
            <div className="bg-white w-full hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600">
                <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200"/>
                 <input type="text" 
                 placeholder="Search for porducts"
                 className="placeholder:text-sm flex-1 outline-none"/>
            </div>
            {/* Login/Register */}
            {!session &&(
            <div onClick={()=>signIn()} className="headerDiv">
              <AiOutlineUser className="text-2xl"/>
              <p>Loging/Register</p>
            </div>
            )}
            {/* cart-button */}
            <div className="cardDiv">
              <FaCartShopping className="text-2xl"/>
              <p>$0.00</p>
              <span className="spanClass">
                0
              </span>
            </div>
            {/* user image */}
            {session &&(
              <Image 
              src={session?.user?.image as string}
              width={50}
              height={50}
              alt="user image"
              className="rounded-full object-cover"/>
            )}
            {/* logout button */}
            {session &&(
            <div onClick={()=>signOut()} className="headerDiv gap-x-1 cursor-pointer">
            <FiLogOut className="text-2xl"/>
            <p className="text-sm font-semibold">Logout</p>

            </div>
            )}
        </Container>
       
    </div>
  )
}

export default Header