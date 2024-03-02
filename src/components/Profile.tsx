"use client"
import { FaArrowLeft } from "react-icons/fa6";;
import { Input } from 'antd';
import { LuUser } from "react-icons/lu";
import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GrStatusGood } from "react-icons/gr";
import { useRouter } from "next/navigation";


const ChatElement = () => {
    const [name, setName] = useState<string>('');
    const [about, setAbout] = useState<string>('');
    const [showname, setShowname] = useState<boolean>(false);
    const [showabout, setShowabout] = useState<boolean>(false);
    const router = useRouter();


    const handleAbout = () => {
        setShowabout(true)
    }

    const handleName = () => {
        setShowname(true)
    }
    return (
        <div className="flex flex-col h-full w-96 bg-white shadow-lg px-4 pt-6">

            <div className="flex flex-col gap-4">

                <div className="flex gap-4 items-center mb-4">
                    <FaArrowLeft size={20} onClick={() => router.back()} />
                    <span className="text-2xl font-semibold">Profile</span>
                </div>

                {showname && name.length > 0 && <div className="flex flex-col gap-2">
                    <span className="text-xs text-textColor/[0.5] font-semibold">Name</span>

                    <div className="flex justify-between items-center px-2">

                        <div className="flex gap-4 item-center">
                            <span className="flex items-center"><LuUser size={20} /></span>
                            <span className="break-all">{name}</span>
                        </div>

                        <span className="flex items-center"><HiPencil onClick={() => { setName(name); setShowname(false) }} size={20} className="cursor-pointer"/></span>

                    </div>

                    <span className="text-xs text-textColor/[0.5]">This name will be only visible to your contacts.</span>

                </div>}


                {!showname && <Input
                    placeholder="Name"
                    suffix={<GrStatusGood size={20}
                    className="text-primaryGradientFrom/[0.5] cursor-pointer" onClick={handleName} />}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />}

                {showabout && about.length > 0 && <div className="flex flex-col gap-2">

                    <span className="text-xs text-textColor/[0.5] font-semibold">About</span>

                    <div className="flex justify-between items-center px-2">

                        <div className="flex gap-4 item-center">
                            <span className="flex items-center"><IoMdInformationCircleOutline size={20} /></span>
                            <span className="break-all">{about}</span>
                        </div>

                        <span className="flex items-center"><HiPencil onClick={() => { setAbout(about); setShowabout(false); }} size={20} className="cursor-pointer"/></span>

                    </div>

                </div>}

                {!showabout && <Input
                    placeholder="About"
                    suffix={<GrStatusGood size={20}
                    className="text-primaryGradientFrom/[0.5] cursor-pointer" onClick={handleAbout} />}
                    onChange={(e) => setAbout(e.target.value)}
                    value={about}
                />}

            </div>
        </div>
    )
}

export default ChatElement
