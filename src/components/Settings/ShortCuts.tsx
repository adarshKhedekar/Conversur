import { Modal } from 'antd';

const list = [
    {
        key: 0,
        title: "Mark as unread",
        combination: ["Cmd", "Shift", "U"],
    },
    {
        key: 1,
        title: "Mute",
        combination: ["Cmd", "Shift", "M"],
    },
    {
        key: 2,
        title: "Archive Chat",
        combination: ["Cmd", "Shift", "E"],
    },
    {
        key: 3,
        title: "Delete Chat",
        combination: ["Cmd", "Shift", "D"],
    },
    {
        key: 4,
        title: "Pin Chat",
        combination: ["Cmd", "Shift", "P"],
    },
    {
        key: 5,
        title: "Search",
        combination: ["Cmd", "F"],
    },
    {
        key: 6,
        title: "Search Chat",
        combination: ["Cmd", "Shift", "F"],
    },
    {
        key: 7,
        title: "Next Chat",
        combination: ["Cmd", "N"],
    },
    {
        key: 8,
        title: "Next Step",
        combination: ["Ctrl", "Tab"],
    },
    {
        key: 9,
        title: "Previous Step",
        combination: ["Ctrl", "Shift", "Tab"],
    },
    {
        key: 10,
        title: "New Group",
        combination: ["Cmd", "Shift", "N"],
    },
    {
        key: 11,
        title: "Profile & About",
        combination: ["Cmd", "P"],
    },
    {
        key: 12,
        title: "Increase speed of voice message",
        combination: ["Shift", "."],
    },
    {
        key: 13,
        title: "Decrease speed of voice message",
        combination: ["Shift", ","],
    },
    {
        key: 14,
        title: "Settings",
        combination: ["Shift", "S"],
    },
    {
        key: 15,
        title: "Emoji Panel",
        combination: ["Cmd", "E"],
    },
    {
        key: 16,
        title: "Sticker Panel",
        combination: ["Cmd", "S"],
    },
];

const ShortCuts = ({ isModalOpen, handleOk, handleCancel }: any) => {

    return (
        <Modal title="Keyboard ShortCuts" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800} okButtonProps={{ 
            type: 'primary',
            ghost: true
          }} centered>
            <div className='grid grid-cols-2 gap-4'>
                {list.map((each: any, index: number) => {
                    return <div key={index} className='flex gap-6'>
                        <span className='text-sm font-semibold w-[150px]'>{each.title}</span>
                        <div className='flex gap-2'>
                            {each.combination.map((keys: string[], index: number) => {
                                return <span key={index} className='bg-background rounded p-2 w-[60px] text-center'>{keys}</span>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </Modal>
    )
}

export default ShortCuts
