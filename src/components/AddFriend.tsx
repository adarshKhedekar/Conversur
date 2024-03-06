"use client"
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaCircleNotch } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { HiChevronRight } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";

const AddFriend = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const [friendList, setFriendList] = useState<any>([])
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [requestList, setRequestList] = useState<any>([]);
    const [reqOpen, setReqOpen] = useState<boolean>(false);
    const [seen, setSeen] = useState<boolean>(false);

    useEffect(() => {
        async function getAllFriends() {
            try {
                const friends = await axios.get(`http://localhost:3000/api/add-friend/65e89f6e19bce797718c3e00`);
                setFriendList(friends.data.friendList);
                setRequestList(friends.data.requestList);
                console.log(friends)
            } catch (err) {
                console.log(err)
            }
        }
        getAllFriends()
    }, [])


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = {
            email: emailRef.current?.value
        }
        console.log(data);
        const response = await axios.post(`http://localhost:3000/api/add-friend/65e89f6e19bce797718c3e00`, data);
        console.log(response)
        if (response.data.status === 500) {
            toast.error(response.data.message);
        } else {
            toast.success(response.data.message);
        }
    }


    const handleResponse = async(action : string, email: string) => {
        const data = {
            action,
            email
        }
        const response = await axios.post(`http://localhost:3000/api/action/65e89f6e19bce797718c3e00`,data);
        console.log(response)
        setRequestList(response.data.requestList)
        setFriendList(response.data.friendList);
        if(action === 'accept'){
            toast.success(response.data.message)
        }
    }
    return (
        <div className="flex flex-col h-full w-96 bg-white shadow-lg px-4 pt-6 overflow-y-auto no-scrollbar">
            <div className="flex flex-col gap-4 border-b-[1px] border-textColor/[0.5] mb-4">

                <div className="flex justify-between items-center">
                    <span className="text-2xl font-semibold">Add Friend</span>
                    <FaCircleNotch />
                </div>

            </div>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
                <input type="email" ref={emailRef} placeholder="Enter Friends Email" required className="p-2 w-full outline-none border-2 border-textColor/[0.5] shadow rounded-lg text-sm mb-4" />

                <button type='submit' className="flex bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo text-white rounded-lg w-[40%] items-center p-2  gap-2 hover:opacity-90">

                    <span className="text-md font-semibold">Add Friend</span>
                    <IoMdSend size={20} />

                </button>

            </form>

            {/* Request */}

            <div className="bg-background shadow mt-6 mb-4 px-2 py-[2px] flex justify-between items-center">
                <span className="flex items-center text-base font-semibold text-textColor/[0.5]">
                    <span>Request</span> 
                    {!seen && requestList?.length > 0 && <span className="rounded-full text-[green] animate-ping ml-[2px]"><GoDotFill/></span>}
                </span>
                {reqOpen && <span onClick={() => {setReqOpen(prev => !prev)}} className="cursor-pointer"><BiUpArrowCircle size={25} /></span>}
                {!reqOpen && <span onClick={() => {setReqOpen(prev => !prev); setSeen(true)}} className="cursor-pointer"><BiDownArrowCircle size={25} /></span>}
            </div>

            {reqOpen &&
                (<div className="flex flex-col gap-2 h-auto">
                    {
                        requestList?.length > 0 ? requestList?.map((user: any, index: number) => (
                            <div key={index} className="flex justify-between p-4 border-2 border-background shadow rounded-lg items-center gap-4">

                                <span className="text-sm font-semibold">{user.email}</span>

                                <div className="flex gap-4 items-center">
                                    <span className="text-black cursor-pointer rounded-full p-2 border-[1px]" onClick={() => handleResponse('deny', user.email)}><RxCross2 size={15} /></span>
                                    <span className="bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo text-white cursor-pointer rounded-full p-2" onClick={() => handleResponse('accept', user.email)}><HiChevronRight size={19} /></span>
                                </div>

                            </div>
                        )) :
                            <div className="h-full flex justify-center items-center ">No Friend Request</div>
                    }
                </div>)
            }



            {/* All Firends */}
            <div className="bg-background shadow mt-4 mb-4 px-2 py-[2px] flex justify-between items-center">
                <span className="text-base font-semibold text-textColor/[0.5]">Your Friends</span>
                {navOpen && <span onClick={() => setNavOpen(prev => !prev)} className="cursor-pointer"><BiUpArrowCircle size={25} /></span>}
                {!navOpen && <span onClick={() => setNavOpen(prev => !prev)} className="cursor-pointer"><BiDownArrowCircle size={25} /></span>}
            </div>



            {navOpen &&
                (<div className="flex flex-col gap-2 h-auto">
                    {
                        friendList?.length > 0 ? friendList?.map((user: any, index: number) => (
                            <div key={index} className="flex justify-between p-4 border-2 border-background shadow rounded-lg gap-2 ">
                                <span className="text-md font-semibold">{user.email}</span>
                                <span className="text-primaryGradientFrom cursor-pointer"><AiOutlineMessage size={20} /></span>
                            </div>
                        )) :
                            <div className="h-full flex justify-center items-center ">Go make some friends</div>
                    }
                </div>)
            }
        </div>
    )
}

export default AddFriend
