"use client"
import { LuUser2 } from "react-icons/lu";
import { Avatar, Badge } from 'antd';
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Divider } from 'antd';
import Message from "./Message";
import ChatInput from "./ChatInput";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/slices/app";
import { useEffect, useState } from "react";
import Contact from "./Contact";
import StarredMessages from "./StarredMessages";
import SharedMessages from "./SharedMessages";

const Conversation = () => {
    const dispatch = useDispatch();
    const [sidebar, showsidebar] = useState<boolean>(false);
    const [sidebarType, setSidebarType] = useState<string>("CONTACT")
    const { open, type } = useSelector((state: any) => state.app.sidebar);

    useEffect(() => {
        showsidebar(open)
        setSidebarType(type)
    }, [open, type])

    return (
        <>
            <div className={`w-full h-full flex flex-col`}>

                {/* Header */}
                <div className='flex justify-between py-4 px-6 items-center'>
                    <div className="flex gap-4 items-center cursor-pointer" onClick={() => { dispatch(toggleSidebar()) }}>
                        <Badge dot color="green" >
                            <Avatar shape="circle" icon={<LuUser2 />} />
                        </Badge>
                        <div className="flex flex-3 flex-col gap-[2px] w-[80%]">
                            <span className="font-medium text-sm">Adarsh</span>
                            <span className="text-xs">Online</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex gap-6">
                            <GoDeviceCameraVideo size={20} className="cursor-pointer" />
                            <FaPhoneAlt size={20} className="cursor-pointer" />
                            <CiSearch size={20} className="cursor-pointer" />
                        </div>
                        <Divider type="vertical" />
                        <FaChevronDown size={20} className="cursor-pointer" />
                    </div>

                </div>

                {/* Messages */}
                <div className="grow bg-white overflow-y-auto no-scrollbar px-6 py-2">
                    <Message menu={true}/>
                </div>

                {/* Input */}
                <ChatInput />

            </div>
            {sidebar && (() => {
                switch (sidebarType){
                    case "STARRED":
                    return <StarredMessages />

                    case "SHARED":
                    return <SharedMessages />
                    
                    default:
                    return <Contact/>
                }
            })()}
        </>
    )
}

export default Conversation
