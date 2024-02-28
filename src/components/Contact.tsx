"use client"
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from '@/redux/store';
import { toggleSidebar, updateSidebarType } from "@/redux/slices/app";
import { LuUser2 } from "react-icons/lu";
import { Avatar } from 'antd';
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaPhoneAlt, FaAngleRight, FaStar, FaBell } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import mainlogo from '@/assets/mainlogo.jpg'
import Image from "next/image";
import { Switch } from "antd";
import { useState } from "react";
import Model from '@/components/Model'


const Contact = () => {
  const dispatch = useDispatch();
  const [mute, setMute] = useState<boolean>(false);


  return (
    <div className="w-[40%] bg-white flex flex-col text-textColor gap-2 shadow">

      <div className="flex gap-6 py-6 px-2 bg-background">
        <RxCross2 size={20} onClick={() => dispatch(toggleSidebar())} className="cursor-pointer" />
        <span className="text-sm">Contact info</span>

      </div>

      <div className="flex flex-col gap-2 overflow-y-auto no-scrollbar">
        <div className="flex flex-col gap-4">
          <div className="flex gap-6 items-center cursor-pointer w-full px-4 py-4">
            <Avatar shape="circle" icon={<LuUser2 size={30} />} size={50} />
            <div className="flex flex-3 flex-col gap-[2px]">
              <span className="font-medium text-md">Adarsh</span>
              <span className="text-sm">+92894787584</span>
            </div>
          </div>

          <div className="flex gap-8 justify-center items-center">
            <div className="flex flex-col gap-2 items-center">
              <GoDeviceCameraVideo size={20} className="cursor-pointer text-textColor/[0.7]" />
              <span className="text-xs">Audio</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <FaPhoneAlt size={20} className="cursor-pointer text-textColor/[0.7]" />
              <span className="text-xs">Phone</span>
            </div>
          </div>
        </div>
        <hr className="border-[1px] border-background mt-2" />
        <div className="flex flex-col gap-2 px-2 py-2">
          <span className="text-sm font-semibold text-textColor/[.8]">About</span>
          <span className="text-xs">Cheeteh ki chal baaj ki nazar aur bajirao ki talwar par kabhi sandehy nahi karte</span>
        </div>
        <hr className="border-[1px] border-background mb-[1px]" />

        <div className="flex flex-col gap-4 px-2 cursor-pointer">
          <div className="flex justify-between px-4 items-center" onClick={() => dispatch(updateSidebarType("SHARED"))}>
            <span className="text-xs">Media, links and docs</span>
            <div className="flex gap-2 items-center">
              <span className="text-xs text-primaryGradientFrom">201</span>
              <span><FaAngleRight /></span>
            </div>
          </div>
          <div className="flex gap-2">
            <Image src={mainlogo} alt="" className="w-[30%] shadow" />
            <Image src={mainlogo} alt="" className="w-[30%] shadow" />
            <Image src={mainlogo} alt="" className="w-[30%] shadow" />
          </div>
        </div>

        <hr className="border-[1px] border-background mt-2" />
        <div className="flex justify-between px-2 text-sm items-center text-textColor/[0.8] cursor-pointer" onClick={() => dispatch(updateSidebarType("STARRED"))}>
          <div className="flex gap-2 items-center">
            <span><FaStar /></span>
            <span>Starred Messages</span>
          </div>
          <span><FaAngleRight size={15} /></span>
        </div>
        <hr className="border-[1px] border-background mb-[1px]" />


        <div className="flex justify-between px-2 text-sm items-center text-textColor/[0.8] cursor-pointer">
          <div className="flex gap-2 items-center">
            <span><FaBell /></span>
            <span>Mute Notifications</span>
          </div>
          <span><Switch size="small" className="bg-textColor/[0.8]" onChange={() => setMute(prev => !prev)} /></span>
        </div>
        <hr className="border-[1px] border-background mb-[1px]" />

        <div className="flex flex-col gap-4 py-2 px-4">
          <span className="font-semibold text-textColor/[0.7] text-xs">1 group in common</span>
          <div className="flex flex-col gap-2">
            <div className="flex gap-6 items-center cursor-pointer w-full">
              <Avatar shape="circle" icon={<LuUser2 size={20} />} />
              <div className="flex flex-3 flex-col gap-[2px]">
                <span className="font-medium text-sm">Animals - young</span>
                <span className="text-xs">Owl, parrot, dog, cat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 flex gap-4 justify-center py-2">
          <Model title={'Block'} icon={<AiOutlineStop/>}/>
          <Model title={'Delete'} icon={<MdDelete/>}/>
        </div>

      </div>
    </div>
  )
}

export default Contact
