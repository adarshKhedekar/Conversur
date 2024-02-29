import React, { useEffect, useState } from 'react'
import { LuUsers2 } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { CiSettings, CiUser } from "react-icons/ci";
import mainlogo from '../assets/mainlogo.jpg'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    { index: 0, logo: <LuUsers2 /> , navigate: '/'},
    { index: 1, logo: <AiOutlineMessage />, navigate: '/' },
    { index: 2, logo: <FaPhoneAlt />, navigate: '/call' },
    { index: 2, logo: <CiSettings />, navigate:'/settings'},
]
const Dashboard = () => {
    const [active, setActive] = useState<number>(0);
    const currRoute = usePathname();
    
    useEffect(() => {
        {currRoute === '/settings' && setActive(3)};
        {currRoute === '/call' && setActive(2)};
    }, [currRoute])
    
    return (
        
            <div className='h-screen w-20 bg-background shadow-2xl px-2 py-4 flex flex-col justify-between text-textColor'>
                <div className='flex flex-col gap-4 items-center'>
                    <Image src={mainlogo} alt="" className='rounded-xl shadow-lg mix-blend-multiply cursor-pointer' />

                    {navActions.map((each: NavAction, index: number) => {
                        return <Link href={each.navigate} key={index}>
                            <div  style={iconProps} className={`${active === index ? activebg : ''}`} onClick={() => setActive(index)}>
                                <span>{each.logo}</span>
                            </div>
                        </Link>
                    })}
                    
                </div>

                <div className='flex justify-center'>
                    <CiUser style={iconProps} />
                </div>
            </div>
    )
}

export default Dashboard
