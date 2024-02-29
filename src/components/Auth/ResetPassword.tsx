"use client"
import Image from "next/image"
import mainlogo from '@/assets/mainlogo.jpg'
import { FormEvent, useRef } from "react"
import { FaAngleLeft } from "react-icons/fa"
import Link from "next/link"

const ResetPassword = () => {

    const email = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <div className="flex justify-center items-center w-full h-full bg-white">

            <div className="shadow-lg flex flex-col gap-2 rounded-lg p-4 w-[30rem]">

                <div className="flex justify-center items-center mix-blend-multiply">
                    <Image src={mainlogo} alt="" className="w-[150px]" />
                </div>

                <div className="flex flex-col gap-4 mb-4">
                    <span className="text-lg font-semibold">Forgot Password?</span>
                    <span className="text-sm text-textColor/[0.5]">Please enter the email address associated with your account we will send you the link to reset your password</span>
                </div>

                <form onSubmit={handleSubmit}>

                    <input type="email" ref={email} placeholder="Enter your Email" required className="p-2 w-full outline-none border-2 border-textColor/[0.5] shadow rounded-lg text-sm mb-4" />


                    <button type="submit" className="bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo text-white py-2 w-full rounded-lg">Send Request</button>
                </form>
                <span className="flex cursor-pointer items-center">
                    <FaAngleLeft />
                    <Link href={'/login'} className="hover:underline text-sm">Return to sign in</Link>
                </span>
            </div>


        </div>
    )
}

export default ResetPassword
