"use client"
import Image from "next/image"
import mainlogo from '@/assets/mainlogo.jpg'
import { FormEvent, useRef, useState } from "react"
import { FaAngleLeft } from "react-icons/fa"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link"

const NewPassword = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
    const password = useRef<HTMLInputElement>(null);
    const confirmPassword = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newpassword = password.current?.value
        let confirmpassword = confirmPassword.current?.value

        if(newpassword === confirmpassword){
            alert('success')
        }else{
            alert('wrong')
        }
    }
    return (
        <div className="flex justify-center items-center w-full h-full bg-white">

            <div className="shadow-lg flex flex-col gap-2 rounded-lg p-4 w-[30rem]">

                <div className="flex justify-center items-center mix-blend-multiply">
                    <Image src={mainlogo} alt="" className="w-[150px]" />
                </div>

                <div className="flex flex-col gap-4 mb-4">
                    <span className="text-lg font-semibold">Reset Password?</span>
                    <span className="text-sm text-textColor/[0.5]">Please enter new password</span>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="flex justify-between p-2 w-full border-2 border-textColor/[0.5] shadow rounded-lg text-sm mb-4">
                        <input type={`${showPassword ? 'text' : 'password'}`} ref={password} placeholder="New Password" required className="outline-none" />
                        {showPassword && <FaEyeSlash size={20} onClick={() => setShowPassword(false)} className="text-textColor/[0.5] cursor-pointer" />}
                        {!showPassword && <FaEye size={20} onClick={() => setShowPassword(true)} className="text-textColor/[0.5] cursor-pointer" />}
                    </div>
                    <div className="flex justify-between p-2 w-full border-2 border-textColor/[0.5] shadow rounded-lg text-sm mb-4">
                        <input type={`${showConfirmPassword ? 'text' : 'password'}`} ref={confirmPassword} placeholder="Confirm Password" required className="outline-none" />
                        {showConfirmPassword && <FaEyeSlash size={20} onClick={() => setShowConfirmPassword(false)} className="text-textColor/[0.5] cursor-pointer" />}
                        {!showConfirmPassword && <FaEye size={20} onClick={() => setShowConfirmPassword(true)} className="text-textColor/[0.5] cursor-pointer" />}
                    </div>


                    <button type="submit" className="bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo text-white py-2 w-full rounded-lg">Submit</button>
                </form>
                <span className="flex cursor-pointer items-center">
                    <FaAngleLeft />
                    <Link href={'/login'} className="hover:underline text-sm">Return to sign in</Link>
                </span>
            </div>

        </div>
    )
}

export default NewPassword
