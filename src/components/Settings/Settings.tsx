"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { Avatar } from 'antd';
import { FaRegBell, FaKey, FaRegKeyboard } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoMdHelpCircleOutline, IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineWallpaper } from "react-icons/md";
import ShortCuts from "./ShortCuts";

interface listInterface {
    key: number;
    title: string;
    icon: JSX.Element;
    onclick: any;
}

const list: listInterface[] = [
    {
        key: 1,
        title: 'Notification',
        icon: <FaRegBell />,
        onclick: () => { console.log('clicked') }
    },
    {
        key: 2,
        title: 'Privacy',
        icon: <CiLock />,
        onclick: () => { }
    },
    {
        key: 3,
        title: 'Security',
        icon: <FaKey />,
        onclick: () => { }
    },
    {
        key: 4,
        title: 'Chat Wallpaper',
        icon: <MdOutlineWallpaper />,
        onclick: () => { }
    },
    {
        key: 5,
        title: 'Request Account Info',
        icon: <IoMdInformationCircleOutline />,
        onclick: () => { }
    },
    {
        key: 6,
        title: 'Keyboard Shortcuts',
        icon: <FaRegKeyboard />,
        onclick: () => { console.log('keyboard') }
    },
    {
        key: 7,
        title: 'Help',
        icon: <IoMdHelpCircleOutline />,
        onclick: () => { }
    },
]

const Settings = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOnClick = (e: any, onclick: any) => {
    if(e.target.innerText === 'Keyboard Shortcuts'){
        setIsModalOpen(true);
    }
    onclick();
  }
  
    return (
        <div className="flex bg-white w-full">
            <div className='flex flex-col gap-2 p-4 shadow w-80 bg-background overflow-y-auto no-scrollbar'>
                <div className="flex items-center gap-4">
                    <FaArrowLeft size={20} className="cursor-pointer" onClick={() => router.back()}/>
                    <span className="text-lg font-semibold">Settings</span>
                </div>


                <div className="flex gap-6 items-center cursor-pointer w-full px-4 py-4">
                    <Avatar shape="circle" icon={<LuUser2 size={30} />} size={50} />
                    <div className="flex flex-3 flex-col gap-[2px]">
                        <span className="font-medium text-md">Adarsh</span>
                        <span className="text-xs">Exploring</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    {list.map((each: listInterface, index: number) => {
                        return <div key={index} className="flex gap-4 items-center p-2 border-b-[1px] border-textColor/[0.5] border-solid cursor-pointer" onClick={(e) => (handleOnClick(e, each.onclick))}>
                            <span>{each.icon}</span>
                            <span>{each.title}</span>
                        </div>
                    })}
                </div>
                <ShortCuts isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk}/>
            </div>
        </div>
    )
}

export default Settings
