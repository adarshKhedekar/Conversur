import {connect} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs'

connect()

export async function POST(req: NextRequest){
    try{
        const reqBody = await req.json();
        const {username,email,password} = reqBody;

        // const exisitingUser = await User.findOne({email});

        // if(exisitingUser){
        //     return NextResponse.json({message: 'User already exist', status: 500})
        // }

        // const salt = await bcryptjs.genSalt(10);
        // const hashedPassword = await bcryptjs.hash(password,salt);

        // const newUser = new User({
        //     username,
        //     email,
        //     password: hashedPassword
        // })

        // const savedUser = await newUser.save();

        // console.log(savedUser);

        // return NextResponse.json({message: 'User created Successfully', status: 200, savedUser});
    }catch(error: any){
        return NextResponse.json({error: error.message, status: 500});
    }
}