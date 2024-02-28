import { Divider } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineFileDownload } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from 'react';



const ReplyMsg = ({ el, menu }: any) => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <div className={`flex ${el.incoming ? 'justify-start' : 'justify-end'}`}>

            <div className='flex flex-col gap-[2px] max-w-[50%]'>
                <div className={`flex ${el.incoming ? 'justify-start' : 'justify-end'}`}>
                    {el.incoming && <hr className='border-[2px] rounded-lg border-solid border-textColor/[0.5] h-auto' />}
                    <span className={`flex px-4 py-2 rounded-lg text-sm bg-background/[0.5] text-textColor/[0.5] border-[1px] border-solid border-textColor/[0.5] ${el.incoming ? 'justify-start ml-2' : 'justify-end mr-2'} text-xs`}>

                        {el.reply}

                    </span>
                    {el.outgoing && <hr className='border-[2px] rounded-lg border-solid border-textColor/[0.5] h-auto' />}
                </div>
                <span className={`flex py-2 px-4 ${el.incoming ? 'text-textColor bg-background' : 'bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo/[0.7] text-white'} rounded-lg text-sm`}>

                    {el.message}

                </span>
            </div>



           {menu && <div className='relative'>
                <BsThreeDotsVertical onClick={() => setShowMenu(prev => !prev)} />
                {showMenu && <span className='absolute -top-4 left-4 w-40 z-10'>Hello world</span>}
            </div>}
        </div>
    )
}
const DocMsg = ({ el, menu }: any) => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <div className={`flex ${el.incoming ? 'justify-start ' : 'justify-end'}  w-[280px] break-all`}>

            <div className={`flex flex-col p-2 w-full ${el.incoming ? 'text-textColor bg-background' : 'bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo/[0.7] text-white'} rounded-lg`}>

                <div className='flex gap-4 items-center py-4 px-2 border-2 border-solid border-textColor/[0.5] rounded-lg cursor-pointer justify-between'>
                    <span className='text-Color'>Picture.png</span>
                    <MdOutlineFileDownload size={20} />
                </div>
                <span className='text-center text-sm'>{el.message}</span>
            </div>

            {menu && <div className='relative'>
                <BsThreeDotsVertical onClick={() => setShowMenu(prev => !prev)} />
                {showMenu && <span className='absolute -top-4 left-4 w-40'>Hello world</span>}
            </div>}
        </div>
    )
}
const LinkMsg = ({ el, menu }: any) => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <div className={`flex ${el.incoming ? 'justify-start' : 'justify-end'}`}>
            <Link href={el.preview} className={`flex flex-col gap-2 p-2 cursor-pointer ${el.incoming ? 'text-textColor bg-background' : 'bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo/[0.7] text-white'} max-w-[300px] break-all items-center rounded-lg`}>

                <Image src={el.img} alt='' className='w-56 h-48 rounded-lg' />
                <span className='text-center text-link font-semibold text-sm hover:underline'>{el.preview}</span>
                <span className='text-center text-sm'>{el.message}</span>

            </Link>
            {menu && <div className='relative'>
                <BsThreeDotsVertical onClick={() => setShowMenu(prev => !prev)} />
                {showMenu && <span className='absolute -top-4 left-4 w-40'>Hello world</span>}
            </div>}
        </div>
    )
}
const ImgMsg = ({ el, menu }: any) => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <div className={`flex ${el.incoming ? 'justify-start' : 'justify-end'} rounded-lg`}>
            <div className={`flex flex-col p-2 ${el.incoming ? 'text-textColor bg-background' : ' bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo/[0.7] text-white'} rounded-lg max-w-[300px] break-all`}>

                <Image src={el.img} alt='' className='w-56 h-48 rounded-lg' />
                <span className='text-center text-sm'>{el.message}</span>

            </div>
            {menu && <div className='relative'>
                <BsThreeDotsVertical onClick={() => setShowMenu(prev => !prev)} />
                {showMenu && <span className='absolute -top-4 left-4 w-40'>Hello world</span>}
            </div>}
        </div>
    )
}

const NormalMsg = ({ el, menu }: any) => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <div className={`flex ${el.incoming ? 'justify-start' : 'justify-end'} rounded-lg`}>
            <div className={`flex py-2 px-4 ${el.incoming ? 'text-textColor bg-background' : 'bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo/[0.7] text-white'} rounded-lg text-sm max-w-[50%] break-all`}>

                {el.message}

            </div>
            {menu && <div className='relative'>
                <BsThreeDotsVertical onClick={() => setShowMenu(prev => !prev)} />
                {showMenu && <span className='absolute -top-4 left-4 w-40 z-20'>Hello world</span>}
            </div>}
        </div>
    );
};
const TimeLine = ({ el }: any) => {
    return (
        <Divider>{el.text}</Divider>
    )
}

export { TimeLine, NormalMsg, ImgMsg, LinkMsg, DocMsg, ReplyMsg }
