import NextAuth, { AuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import User from "@/models/users"; 
import { Adapter } from "next-auth/adapters";
import {connect} from '@/dbConfig/dbConfig';

// let AuthUser: any;
// interface SessionUser {
//   username: string;
//   email: string;
//   id: string;
// }

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        connect()
        
        const email = credentials?.email.toLowerCase();

        let user = await User.findOne({ email });

        if (!user) {
          throw new Error("User does not exist.");
        }

        //validate password
        const passwordIsValid = await bcrypt.compare(
          credentials?.password!,
          user.password
        );

        if (!passwordIsValid) {
          throw new Error("Wrong Password");
        }
        // AuthUser = user;
        user = user._doc;

        return user;
        
      },
    }),
  ],
  callbacks:{
   async session({session, token}){
    // console.log('fff', AuthUser)
    // if(AuthUser){
    //   session.user = {
    //     username: AuthUser.username,
    //     email: AuthUser.email,
    //     id: AuthUser._id,
    //   } as SessionUser;
    // }else{
    //   session.user = token
    //   console.log('thokd' , token)
    // }
    // console.log('see', session)

    session.user = token;
    return session;
   },

   //impliment jwt--->afterwards
   async jwt({token, user}){
    token = {...token, ...user};
    return token;
   }
  },
  session:{
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);


export {handler as GET, handler as POST};