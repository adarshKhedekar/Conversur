import { FaCircleNotch } from "react-icons/fa";
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { MdOutlineArchive } from "react-icons/md";
import { LuUser2, } from "react-icons/lu";
import Chats from "./Chats";

const { Search } = Input;

const ChatList = [
    {
        id: 0,
        img: <LuUser2 />,
        name: "Adarsh",
        msg: " yes i am fine what about you",
        time: "9:36",
        unread: 0,
        pinned: true,
        online: true,
    },
    {
        id: 1,
        img: <LuUser2 />,
        name: "Don",
        msg: "Adarsh Is a good boyt. how are you yes i am fine what about you",
        time: "12:02",
        unread: 2,
        pinned: true,
        online: false,
    },
    {
        id: 2,
        img: <LuUser2 />,
        name: "Don",
        msg: "Adarsh Is a good boyt. how are you yes i am fine what about you",
        time: "10:35",
        unread: 3,
        pinned: false,
        online: true,
    },
    {
        id: 3,
        img: <LuUser2 />,
        name: "Don",
        msg: "Adarsh Is a good boyt. how are you yes i am fine what about you",
        time: "04:00",
        unread: 0,
        pinned: false,
        online: true,
    },
    {
        id: 4,
        img: <LuUser2 />,
        name: "Don",
        msg: "Adarsh Is a good boyt. how are you yes i am fine what about you",
        time: "08:42",
        unread: 0,
        pinned: false,
        online: false,
    },
    {
        id: 5,
        img: <LuUser2 />,
        name: "Don",
        msg: "Adarsh Is a good boyt. how are you yes i am fine what about you",
        time: "08:42",
        unread: 0,
        pinned: false,
        online: false,
    },
    {
        id: 6,
        img: <LuUser2 />,
        name: "Don",
        msg: "Adarsh Is a good boyt. how are you yes i am fine what about you",
        time: "08:42",
        unread: 0,
        pinned: false,
        online: false,
    },
    {
        id: 7,
        img: <LuUser2 />,
        name: "Don",
        msg: "Adarsh Is a good boyt. how are you yes i am fine what about you",
        time: "08:42",
        unread: 0,
        pinned: false,
        online: false,
    },
];

const ChatElement = () => {
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    return (
        <div className="flex flex-col h-full w-72 bg-white shadow-lg px-4 pt-6">

            <div className="flex flex-col gap-4 border-b-[1px] border-textColor/[0.5]">

                <div className="flex justify-between items-center">
                    <span className="text-2xl font-semibold">Chats</span>
                    <FaCircleNotch />
                </div>

                <div>
                    <Search placeholder="input search text" allowClear onSearch={onSearch} />
                </div>

                <div className="flex gap-[4px] items-center pb-2 cursor-pointer">
                    <MdOutlineArchive size={22}/>
                    <span className="text-sm text-primaryGradientFrom/[0.7] rounded-md p-[2px]">Archieved</span>
                </div>

            </div>

            <div className="flex flex-col overflow-y-auto no-scrollbar py-2 gap-4">

                <Chats title={'Pinned'} Chatlist={ChatList.filter((e) => e.pinned == true)}/>
                <Chats title={'All Chats'} Chatlist={ChatList.filter((e) => e.pinned == false)}/>  
                  
            </div>
        </div>
    )
}

export default ChatElement
