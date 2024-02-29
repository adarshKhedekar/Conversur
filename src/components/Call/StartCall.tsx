import { Input , Modal} from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuUser } from 'react-icons/lu';
import { MdOutlinePhone } from 'react-icons/md';

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

interface StartCallInterface{
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

interface userInterface{
  id: number;
  name: string;
  img: JSX.Element;
}

const users: userInterface[] = [
  {
    id: 0,
    name: 'Adarsh', 
    img: <LuUser size={20}/>
  },
  {
    id: 1,
    name: 'Ashish', 
    img: <LuUser size={20}/>
  },
  {
    id: 2,
    name: 'Don', 
    img: <LuUser size={20}/>
  },
] 

const StartCall = ({isModalOpen, handleOk, handleCancel}: StartCallInterface) => {
  return (
    <>
    <Modal title="Start Call" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ghost: true}} footer={null}>
      <Search placeholder="input search text" allowClear onSearch={onSearch}  />
      <div className='flex flex-col gap-2 mt-4'>
        {users?.map((each: userInterface, index:number) => (
          <div key={index} className='flex justify-between px-4 py-4 shadow rounded-lg'>
            <div className='flex items-center gap-4'>
            <span className='text-white bg-textColor/[0.5] rounded-full p-2'>{each.img}</span>
            <span>{each.name}</span>
            </div>
            <div className='flex items-center gap-4'>
            <MdOutlinePhone size={20} className="cursor-pointer text-call"/>
            <IoVideocamOutline size={20} className="cursor-pointer text-call"/>
            </div>
          </div>
        ))}
      </div>
    </Modal>
    </>
  )
}

export default StartCall
