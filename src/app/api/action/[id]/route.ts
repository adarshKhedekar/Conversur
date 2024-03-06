import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/users";
import { ObjectId } from "mongodb";

export async function POST(req: NextRequest, { params }: any) {
  connect();
  try {
    const reqBody = await req.json();
    const { action, email } = reqBody;

    const _id = new ObjectId(params.id);

    let requestList;
    let friendList;

    const user = await User.findOne({ _id });

    if (!user) {
      return NextResponse.json({
        message: "User dosenot Exist",
        status: 500,
      });
    }



    requestList = user.requests;

    if (action === "accept") {
        friendList = user.friends;
        friendList.push({email});
        user.friends = friendList;

        //adding to user to senders friendlist also

        const sender = await User.findOne({email});
        console.log(sender)

        if(!sender){
            return NextResponse.json({
                message: "User dosenot Exist",
                status: 500,
            });
        }

        const senderFriendList = sender.friends;

        senderFriendList.push({email: user.email});

        sender.friends = senderFriendList;

        await sender.save();

    }
    requestList = requestList.filter((user: any) => user.email !== email)
    user.requests = requestList;

    await user.save();

    return NextResponse.json({
      message: "User added to chat successfully",
      status: 200,
      requestList: requestList,
      friendList: friendList
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
