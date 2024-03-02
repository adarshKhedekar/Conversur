import { Avatar, Badge } from 'antd';
import { LuUser2 } from "react-icons/lu";
import { MdOutlinePhone  } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";

interface Chat {
    id: number;
    img: JSX.Element;
    name: string;
    type: string;
    time: string;
    incoming: boolean;
    outgoing: boolean;
    missed?: boolean
}

interface ChatsProps {
    Chatlist: Chat[];
}

const Chats = ({  Chatlist }: ChatsProps) => {
    return (
        <div className="flex flex-col gap-2">

            {Chatlist?.map((each: any, index: number) => {
                return <div key={index} className='flex flex-col gap-2'>

                    <div className="flex gap-2 items-center justify-center py-4 px-2 shadow rounded-lg">

                        {each.online ? <Badge dot color="green" >
                            <Avatar shape="circle" icon={<LuUser2 />} />
                        </Badge> :
                            <Badge color="green" >
                                <Avatar shape="circle" icon={<LuUser2 />} />
                            </Badge>
                        }

                        <div className="flex flex-3 flex-col gap-[2px] w-[80%]">
                            <span className={`font-medium text-sm ${each.missed ? 'text-[red]' : ''}`}>{each.name}</span>
                            <span className="flex gap-2 text-xs">
                                <span className='flex items-center'>
                                    {each.outgoing ? <MdArrowOutward className='text-call'/>: <GoArrowDownLeft className='text-[red]'/>}
                                    <span>Yesterday</span>
                                </span>
                                 {each.time}
                                 </span>
                        </div>

                        <div className="flex flex-col gap-2 items-center text-xs">
                            {each.incoming ? <MdOutlinePhone size={20} className="cursor-pointer text-call"/>: <IoVideocamOutline size={20} className="cursor-pointer text-call"/>}
                        </div>

                    </div>
                </div>
            })}
        </div>
    )
}

export default Chats
