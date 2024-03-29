"use client"
import React, { useEffect, useState } from 'react'
import { LuUsers2, LuUser } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io"
import { CiSettings, CiUser } from "react-icons/ci";
import mainlogo from '../assets/mainlogo.jpg'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

interface NavAction {
    index: number;
    logo: JSX.Element; // Assuming these logos are React components
    navigate: string;
}

const iconProps = {
    borderRadius: '0.75rem',
    height: '2.90rem',
    width: '100%',
    cursor: 'pointer',
    padding: '0.75rem',
    fontSize: '1.25rem'
}
const activebg: string = `bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo text-white`

const navActions: NavAction[] = [
    { index: 0, logo: <AiOutlineMessage />, navigate: '/' },
    { index: 1, logo: <LuUsers2 />, navigate: '/group' },
    { index: 2, logo: <IoMdPersonAdd />, navigate: '/add-friend' },
    { index: 3, logo: <CiSettings />, navigate: '/settings' },
]
const Dashboard = () => {
    const session = useSession();
    const [active, setActive] = useState<number | null>(null);
    const [showmenu, setShowmenu] = useState<boolean>(false);
    const currRoute = usePathname();
    const router = useRouter();

    useEffect(() => {
        {currRoute === '/' && setActive(0)}
        {currRoute === '/settings' && setActive(3) };
        {currRoute === '/add-friend' && setActive(2) };
        {currRoute === '/group' && setActive(1)};
    }, [currRoute, router, session])

    const handleLogout = async() => {
        signOut({redirect: false}).then(() => {
            router.push('/')
        }).catch((err) => console.log('err', err))
    }

    return (

        <div className='h-screen w-20 bg-background shadow-2xl px-2 py-4 flex flex-col justify-between text-textColor'>
            <div className='flex flex-col gap-4 items-center'>
                <Link href={'/'}>
                    <Image src={mainlogo} alt="" className='rounded-xl shadow-lg mix-blend-multiply cursor-pointer' />
                </Link>

                {navActions.map((each: NavAction, index: number) => {
                    return <Link href={each.navigate} key={index}>
                        <div style={iconProps} className={`${active === index ? activebg : ''}`} onClick={() => setActive(index)}>
                            <span>{each.logo}</span>
                        </div>
                    </Link>
                })}

            </div>

            <div className='flex justify-center relative'>
                <CiUser style={iconProps} onClick={() => setShowmenu(prev => !prev)}/>
                {showmenu && <div className='flex flex-col justify-center p-4 gap-4 bg-white rounded-lg absolute bottom-8 left-10 z-10'>
                    <Link href={'/profile'} className='text-sm flex gap-2 hover:font-semibold'>
                        <span><LuUser size={20} /></span> 
                        <span>Profile</span>
                        </Link>
                    <Link href={'/login'} className='text-sm flex gap-2 hover:font-semibold'>
                        <span><IoIosLogOut size={20}/></span>
                        <span onClick={handleLogout}>Logout</span>
                    </Link>
                </div>}
            </div>
        </div>
    )
}

export default Dashboard
