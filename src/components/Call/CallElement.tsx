"use client"
import { FaCircleNotch } from "react-icons/fa";
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { MdOutlinePhone  } from "react-icons/md";
import { LuUser2, } from "react-icons/lu";
import CallHistory from './CallHistory'
import StartCall from "./StartCall";
import { useState } from "react";

const { Search } = Input;

const ChatList = [
    {
        id: 0,
        img: <LuUser2 />,
        name: "Adarsh",
        type: 'phone',
        time: "9:36",
        incoming: true,
        outgoing: false,
        missed: true
    },
    {
        id: 0,
        img: <LuUser2 />,
        name: "Adarsh",
        type: 'phone',
        time: "9:36",
        incoming: true,
        outgoing: false
    },
    {
        id: 0,
        img: <LuUser2 />,
        name: "Ashish",
        type: 'video',
        time: "8:36",
        incoming: false,
        outgoing: true
    },
    {
        id: 0,
        img: <LuUser2 />,
        name: "Adarsh",
        type: 'phone',
        time: "9:36",
        incoming: true,
        outgoing: false
    },
    {
      id: 0,
      img: <LuUser2 />,
      name: "Ashish",
      type: 'video',
      time: "8:36",
      incoming: false,
      outgoing: true
  },{
    id: 0,
    img: <LuUser2 />,
    name: "Ashish",
    type: 'video',
    time: "8:36",
    incoming: false,
    outgoing: true
},
    
];
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const CallLogElement = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
        <div className="flex flex-col h-full w-96 bg-white shadow-lg px-4 pt-6">

            <div className="flex flex-col gap-4 border-b-[1px] border-textColor/[0.5]">

                <div className="flex justify-between items-center">
                    <span className="text-2xl font-semibold">Call Logs</span>
                    <FaCircleNotch />
                </div>

                <div>
                    <Search placeholder="input search text" allowClear onSearch={onSearch} />
                </div>

                <div className="flex justify-between items-center p-2">
                    <span className="text-sm text-primaryGradientFrom/[0.7] rounded-md p-[2px]">Start New Conversation</span>
                    <MdOutlinePhone size={20} className="cursor-pointer text-primaryGradientFrom/[0.5]" onClick={showModal}/>
                </div>

            </div>

            <div className="flex flex-col overflow-y-auto no-scrollbar py-2 gap-4">

                <CallHistory Chatlist={ChatList}/>  
                  
            </div>
            {isModalOpen && <StartCall isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>}
        </div>
    )
}

export default CallLogElement
