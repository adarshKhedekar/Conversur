import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);//--> exclamation means that mongoURI will always have a value.

        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log('Mongoose connected Successfully!!')
        })

        connection.on('error', (err)=>{
            console.log('Something went wrong!!',err);
            process.exit()
        })
    }
    catch(err){
        console.log('Something went wrong!!', err)
    }
}