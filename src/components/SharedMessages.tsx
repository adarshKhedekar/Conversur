import { updateSidebarType } from "@/redux/slices/app";
import { useDispatch } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { Tabs } from 'antd';
import mainlogo from '@/assets/mainlogo.jpg';
import Image from "next/image";
import { DocMsg, LinkMsg } from "./MsgTypes";

const onChange = (key: string) => {
    console.log(key);
};


const tabsData = [
    {
        key: '1',
        label: 'Media',
        children: [mainlogo, mainlogo, mainlogo, mainlogo, mainlogo],
    },
    {
        key: '2',
        label: 'Links',
        children: [
            {
                type: "msg",
                subtype: "link",
                img: mainlogo,
                preview: 'https://www.youtube.com',
                message: "Yep, I can also do that kjfksdjfksdjfksjfskld;fjks;jfklsjfksjflksjksjdfks",
                incoming: true,
                outgoing: false,
            },
            {
                type: "msg",
                subtype: "link",
                img: mainlogo,
                preview: 'https://www.google.com',
                message: "Yep, I can also do ksjdfks",
                incoming: false,
                outgoing: true,
            },
        ],
    },
    {
        key: '3',
        label: 'Docs',
        children: [
            {
                type: "msg",
                subtype: "doc",
                message: "Yes sure, here you go. kljfksdfjskjfskffkldkslfskflskflskfjsfjslfkjs",
                incoming: true,
                outgoing: false,
            },
            {
                type: "msg",
                subtype: "doc",
                message: "Yes sure, here you go.",
                incoming: false,
                outgoing: true,
            },
        ],
    },
];

const SharedMessages = () => {
    const dispatch = useDispatch();

    return (
        <div className="w-[40%] bg-white flex flex-col text-textColor gap-2 shadow">
            <div className="flex gap-6 py-6 px-2 bg-background">
                <FaArrowLeft size={20} onClick={() => dispatch(updateSidebarType("CONTACT"))} className="cursor-pointer" />
                <span className="text-sm">Shared Messages</span>
            </div>
            <div className="no-scrollbar overflow-y-auto">
                <Tabs defaultActiveKey="1" centered onChange={onChange}>
                    {tabsData.map(tab => (
                        <Tabs.TabPane key={tab.key} tab={tab.label} >
                            <div className="flex flex-wrap p-2 gap-2">
                                {tab.children.map((child: any, index: number) => {
                                    switch(tab.label){
                                        case 'Media':
                                            return <Image src={child} alt="" key={`${tab.key}-${index}`} className="w-[31%] shadow" />
                                        case 'Links':
                                            return <LinkMsg el={child} menu={false}/>
                                        case 'Docs':
                                            return <DocMsg el={child} menu={false}/>
                                    }
                                })}
                            </div>
                        </Tabs.TabPane>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}

export default SharedMessages;
