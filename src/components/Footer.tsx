'use client';
import Container from './Container';
import Logo from './Logo';
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import Link from "next/link";
import Image from 'next/image';
import payment from "@/images/payment.webp";





const Footer = () => {
    return (
        <div className='w-full bg-darkText text-slate-100'>
            <Container className='grid grid-colls-1 md:grid-colls-2 lg:grid-cols-4 gap-10'>
                <div className='flex flex-col gap-y-4'>
                    <Logo />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam vitae porro pariatur alias ipsam voluptatibus ad voluptatum error magni quam.</p>
                    <div className='flex items-center gap-x-4'>
                        <a href="https://www.youtube.com/" target='_blank'>
                            <span className='socialLink'><FaYoutube /></span>
                        </a>
                        <a href="https://github.com/" target='_blank'>
                            <span className='socialLink'><FaGithub /></span>
                        </a>
                        <a href="https://www.youtube.com/" target='_blank'>
                            <span className='socialLink'><BsLinkedin /></span>
                        </a>
                        <a href="https://www.facebook.com/" target='_blank'>
                            <span className='socialLink'><BsFacebook /></span>
                        </a>
                        <a href="https://www.youtube.com/" target='_blank'>
                            <span className='socialLink'><BsReddit /></span>
                        </a>
                    </div>
                </div>
                <div>
                    <p className='text-lg'>Laset posts</p>
                    <ul className='text-sm font-light mt-2 flex flex-col gap-y-2'>
                        <li className='flex flex-col'>
                            <span className='text-slate hover:text-orange-600 cursor-pointer duration-200'>Where Music Is Headed Next</span>
                            <span className='text-orange-600'>Navbar 26, 2023</span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-slate hover:text-orange-600 cursor-pointer duration-200'>Where Music Is Headed Next</span>
                            <span className='text-orange-600'>Navbar 26, 2023</span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-slate hover:text-orange-600 cursor-pointer duration-200'>Where Music Is Headed Next</span>
                            <span className='text-orange-600'>Navbar 26, 2023</span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-slate hover:text-orange-600 cursor-pointer duration-200'>Where Music Is Headed Next</span>
                            <span className='text-orange-600'>Navbar 26, 2023</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg'>Linkd</p>
                    <ul className='text-base font-medium mt-2 flex flex-col gap-y-2'>
                        <Link href={"/"}>
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>Home</li>
                        </Link>

                        <Link href={"/cart"}>
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>Cart</li>
                        </Link>
                        <Link href={"/about"}>
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>About</li>
                        </Link>
                        <Link href={"/newsletter"}>
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>Newsletter</li>
                        </Link>
                        <Link href={"/contact"}>
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>Contact</li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <p className='text-lg mb-2'>Pay us with trusted services</p>
                    <Image src={payment} alt="payment banner image"
                        className='w-full h-10 object-cover' />
                </div>
            </Container>
        </div>
    )
}

export default Footer;