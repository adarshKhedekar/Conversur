import { Avatar, Badge } from 'antd';
import { LuUser2 } from "react-icons/lu";

interface Chat {
    id: number;
    img: JSX.Element;
    name: string;
    msg: string;
    time: string;
    unread: number;
    pinned: boolean;
    online: boolean;
}

interface ChatsProps {
    title: string;
    Chatlist: Chat[];
}

const Chats = ({ title, Chatlist }: ChatsProps) => {
    return (
        <div className="flex flex-col gap-2">
            <span className="py-2 text-sm font-semibold text-textColor/[0.7]">{title}</span>

            {Chatlist?.map((each: any) => {
                return <div key={each.id} className='flex flex-col gap-2'>

                    <div className="flex gap-2 items-center justify-center p-[6px]">

                        {each.online ? <Badge dot color="green" >
                            <Avatar shape="circle" icon={<LuUser2 />} />
                        </Badge> :
                            <Badge color="green" >
                                <Avatar shape="circle" icon={<LuUser2 />} />
                            </Badge>
                        }

                        <div className="flex flex-3 flex-col gap-[2px] w-[80%]">
                            <span className="font-medium text-sm">{each.name}</span>
                            <span className="text-xs">{(each.msg.slice(0, 20)) + '...'}</span>
                        </div>

                        <div className="flex flex-col gap-2 items-center text-xs">
                            <span>{each.time}</span>
                            {each.unread > 0 && <span className="bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo/[0.5] text-white px-[4px] rounded-full">{each.unread}</span>}
                        </div>

                    </div>
                    
                    <hr className='border-[1px] border-textColor/[0.1]'/>
                </div>
            })}
        </div>
    )
}

export default Chats
