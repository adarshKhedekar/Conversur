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

const Conversation = () => {
    const dispatch = useDispatch();
    const contactBar = useSelector((state: any) => state.app.sidebar.open);
    console.log(contactBar)
    return (
            <div className={`${contactBar ? 'w-[calc(100%-668px)]' : 'w-[calc(100%-368px)]'} h-full flex flex-col`}>

            {/* Header */}
            <div className='flex justify-between py-4 px-6 items-center'>
                <div className="flex gap-4 items-center" onClick={() => {dispatch(toggleSidebar())}}>
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
                        <GoDeviceCameraVideo size={20} />
                        <FaPhoneAlt size={20} />
                        <CiSearch size={20} />
                    </div>
                    <Divider type="vertical" />
                    <FaChevronDown size={20} />
                </div>

            </div>

            {/* Messages */}
            <div className="grow bg-white overflow-y-auto no-scrollbar px-6 py-2">
                <Message />
            </div>

            {/* Input */}
            <ChatInput/>
           
        </div>
    )
}

export default Conversation
