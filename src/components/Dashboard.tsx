import React, { useState } from 'react'
import { LuUsers2 } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { CiSettings, CiUser } from "react-icons/ci";
import mainlogo from '../assets/mainlogo.jpg'
import Image from 'next/image'
import ChatElement from './ChatElement';;
import Conversation from './Conversation';
import Contact from "./Contact";
import { useSelector } from '@/redux/store';

interface NavAction {
    index: number;
    logo: JSX.Element; // Assuming these logos are React components
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
    { index: 0, logo: <LuUsers2 /> },
    { index: 1, logo: <AiOutlineMessage /> },
    { index: 2, logo: <FaPhoneAlt /> },
    { index: 2, logo: <CiSettings  />},
]
const Dashboard = () => {
    const [active, setActive] = useState<number>(0);
    return (
        <div className='w-lvw h-lvh flex'>
            <div className='h-screen w-20 bg-background shadow-2xl px-2 py-4 flex flex-col justify-between text-textColor'>
                <div className='flex flex-col gap-4 items-center'>
                    <Image src={mainlogo} alt="" className='rounded-xl h-14 shadow-lg mix-blend-multiply cursor-pointer' />

                    {navActions.map((each: NavAction, index: number) => {
                        return <div key={index}>
                            <div style={iconProps} className={`${active === index ? activebg : ''}`} onClick={() => setActive(index)}>{each.logo}</div>
                        </div>
                    })}
                    
                </div>

                <div className='flex justify-center'>
                    <CiUser style={iconProps} />
                </div>
            </div>

            <ChatElement/>
            <Conversation/>
            <Contact/>
        </div>
    )
}

export default Dashboard
