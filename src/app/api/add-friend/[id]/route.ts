import {connect} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/users'
import { ObjectId } from 'mongodb';


export async function POST(req: NextRequest, {params}: any){
    connect();
    try{
        const reqBody = await req.json();
        const {email} = reqBody;
        const isValidUser = await User.findOne({email});

        if(!isValidUser){
            return NextResponse.json({message: 'User is not registered to Conversur', status: 500});
        }
        
        const UserId = isValidUser._id.toString()

        //If user is sending req to him/herself
        if(params.id === UserId){
            return NextResponse.json({message: 'Dont send Request to Yourself', status: 500});
        }
        

        //If user is sending req who is already a friend
        const friendUserList = isValidUser.friends;
        const isFriendPresent =  friendUserList.find((user: any) => user.email === email);
        
        if(isFriendPresent){
            return NextResponse.json({message: 'This User is already your Friend', status: 500})
        }

        //adding friend request to receipent data
        const _id = new ObjectId(params.id);

        const sender = await User.findOne({_id});
        const senderEmail = sender.email;

        const isPending = isValidUser.requests.find((user: any) => user.email === senderEmail);

        if(isPending){
            return NextResponse.json({message: 'Your Request is in pending state', status: 500})
        }

        isValidUser.requests.push({email: senderEmail});

        await isValidUser.save();

        
        return NextResponse.json({message: 'Request Send Successfully', status: 200})
    }catch(error: any){
        return NextResponse.json({error: error.message, status: 500});
    }
}


export async function GET(req: NextResponse, {params}: any){
    connect();
    try{
        const _id = new ObjectId(params.id)
        const user = await User.findOne({_id});

        if(!user){
            return NextResponse.json({message: 'User dosenot Exist', status: 500});
        }

        const friendList = user.friends;
        const requestList = user.requests;
        
        return NextResponse.json({message: 'FriendList Send', status: 200, friendList: friendList, requestList: requestList});
    
    }catch(error: any){
        return NextResponse.json({error: error.message, status: 500});
    }
}