import img from '@/assets/mainlogo.jpg';
import { ImgMsg, NormalMsg, TimeLine, LinkMsg, DocMsg, ReplyMsg } from '@/components/MsgTypes';

const ChatHistory = [
    {
        type: "msg",
        message: "Hi 👋🏻, How are ya ?",
        incoming: true,
        outgoing: false,
    },
    {
        type: "divider",
        text: "Today",
    },
    {
        type: "msg",
        message: "Hi 👋 Panda, not bad, u ?",
        incoming: false,
        outgoing: true,
    },
    {
        type: "msg",
        message: "Can you send me an abstarct image?",
        incoming: false,
        outgoing: true,
    },
    {
        type: "msg",
        message: "Ya sure, sending you a fkdsljfksdlfjskfskf;fl;dslkf;l'akfldkflskfskf';sslkfsl;fkskfskpic",
        incoming: true,
        outgoing: false,
    },

    {
        type: "msg",
        subtype: "img",
        message: "Here You Go",
        img: img,
        incoming: false,
        outgoing: true,
    },
    {
        type: "msg",
        message: "Can you please send this in file formatksfjld;fkls;djfkds;jlkf;skdaf;sdkf;slkfjds;fjksjf;skdfjsfkds;fsfdkls;fks;fsf;s?",
        incoming: false,
        outgoing: true,
    },

    {
        type: "msg",
        subtype: "doc",
        message: "Yes sure, here you go. kljfksdfjskjfskffkldkslfskflskflskfjsfjslfkjs",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "link",
        img: img,
        preview: 'https://www.youtube.com',
        message: "Yep, I can also do that kjfksdjfksdjfksjfskld;fjks;jfklsjfksjflksjksjdfks",
        incoming: true,
        outgoing: false,
    },
    {
        type: "msg",
        subtype: "reply",
        reply: "This is a reply",
        message: "Yep, I can also do that",
        incoming: false,
        outgoing: true,
    },
    {
        type: "msg",
        subtype: "reply",
        reply: "This is a reply",
        message: "Yep, I can also do that kjsfkdjfks jfk;afk djaksfjskf a;fkdjfsdkfjsdkfjs f;dsfjsdkfl;jskfs ;afkfjlks djfsfk;af ksdjfsjfl",
        incoming: true,
        outgoing: false,
    },
];

const Message = ({menu}: {menu: boolean}) => {
    return (
        <div className='flex flex-col gap-2'>
            {
            ChatHistory?.map((el: any, index: number) => {
                switch (el.type) {
                    case "divider":
                        return <TimeLine key={index} el={el} />

                    case "msg":
                        switch (el.subtype) {
                            case "img":
                                return <ImgMsg key={index} el={el} menu={menu}/>

                            case "link":
                                return <LinkMsg key={index} el={el} menu={menu}/>

                            case "doc":
                                return <DocMsg key={index} el={el}  menu={menu}/>

                            case "reply":
                                return <ReplyMsg key={index} el={el} menu={menu} />

                            default:
                                return <NormalMsg key={index} el={el}  menu={menu}/>
                        }
                    default:
                        return <div key={index}></div>
                }
            })
            }
        </div>

    )
}

export default Message
