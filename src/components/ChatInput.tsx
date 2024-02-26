import React from 'react'
import { IoIosLink, IoIosSend } from "react-icons/io";
import { CiFaceSmile, CiFileOn, CiCamera } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";
import { LuUser2 } from 'react-icons/lu';
import { PiStickerDuotone } from "react-icons/pi";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState } from "react";
import { Avatar } from 'antd';

const Actions = [
    {
        color: "#fd9206",
        icon: <GrGallery size={25} />,
        y: 12,
        title: "Photo/Video",
    },
    {
        color: "#fe7823",
        icon: <PiStickerDuotone size={25} />,
        y: 72,
        title: "Stickers",
    },
    {
        color: "#f84d46",
        icon: <CiCamera size={25} />,
        y: 132,
        title: "Image",
    },
    {
        color: "#f3236f",
        icon: <CiFileOn size={25} />,
        y: 192,
        title: "Document",
    },
    {
        color: "#ed0990",
        icon: <LuUser2 size={25} />,
        y: 252,
        title: "Contact",
    },
];

const ChatInput = () => {
    const [emojiPalette, setEmojiPlalette] = useState<boolean>(false);
    const [options, setOptions] = useState<boolean>(false);

    return (
        <div>
            {emojiPalette && (
                <div className="absolute bottom-16 right-16 z-10">
                    <Picker data={data} onEmojiSelect={console.log} />
                </div>
            )}

            {options && (
                <div className='relative'>
                    {Actions?.map((each: any, index: number) => {
                        return (
                            <div key={index} className={`absolute left-6 cursor-pointer`} style={{ bottom: each.y + 'px' }}>
                                <div className="group">
                                    <Avatar icon={each.icon} size={50} className='overflow-hidden group-hover:opacity-80' style={{ backgroundColor: each.color }} />
                                    <span className='text-white bg-textColor/[0.7] p-[2px] text-xs rounded-lg ml-2 opacity-0 group-hover:opacity-100 group-hover:visible'>{each.title}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            <div className="flex gap-2 px-6 py-4 w-full items-center justify-between">

                <div className="relative w-full">
                    <input type="text" placeholder="Write a message" className="pl-10 pr-10 py-2  rounded-md w-[100%]" />

                    <IoIosLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" size="20" onClick={() => setOptions(prev => !prev)} />

                    <CiFaceSmile className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" size="20" onClick={() => setEmojiPlalette(prev => !prev)} />
                </div>

                <div className="bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo p-2 rounded-full cursor-pointer">
                    <IoIosSend size={20} className="text-white" />
                </div>

            </div>
        </div>
    )
}

export default ChatInput
