import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateSidebarType } from "@/redux/slices/app";
import Message from "./Message";
const StarredMessages = () => {
    const dispatch = useDispatch();
  return (
    <div className="w-[40%] bg-white flex flex-col text-textColor gap-2 shadow">
            <div className="flex gap-6 py-6 px-2 bg-background">
                <FaArrowLeft size={20} onClick={() => dispatch(updateSidebarType("CONTACT"))} className="cursor-pointer" />
                <span className="text-sm">Starred Messages</span>
            </div>
            <div className="overflow-auto no-scrollbar">
            <Message menu={false}/>
            </div>
    </div>
  )
}

export default StarredMessages
