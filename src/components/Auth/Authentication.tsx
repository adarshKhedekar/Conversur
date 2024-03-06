"use client"
import { useEffect, useRef, useState } from "react"
import mainlogo from '@/assets/mainlogo.jpg'
import Image from "next/image"
import { Divider } from "antd"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link"
import { signIn, useSession } from 'next-auth/react'
import toast from "react-hot-toast"
import axios from "axios";
import { useRouter } from "next/navigation"
import Loading from "../Loading"



const Authentication = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const { status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/')
    }
    console.log(status)
  }, [status, router,])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isLogin) {
      const data = {
        email: email.current?.value,
        password: password.current?.value,
      }

      signIn('credentials', {
        ...data,
        redirect: false
      }).then((callback: any) => {
        if(callback.error){
          toast.error(callback.error);
        }else{
          toast.success('Logged In');
          router.push('/')
        }
      })
    } else {
      if (password.current) {
        if (password.current.value.length < 8) {
          setError(true);
          return;
        } else {
          setError(false);
        }
      }
      const data = {
        username: name.current?.value,
        email: email.current?.value,
        password: password.current?.value
      }
      let user = await axios.post('http://localhost:3000/api/register', data);
      console.log(user)
      if (user?.data.savedUser) {
        toast.success('Registered Successfully')
        if (email.current) email.current.value = '';
        if (password.current) password.current.value = '';
        setIsLogin(true)
      } else {
        toast.error(user.data.message)
      }
    }
  }

  const SocialActions = async (provider: string) => {
    signIn(provider, { redirect: false });
  }

  return (
    !(status === 'loading' || status === 'authenticated') ? (<div className="flex justify-center items-center w-full h-full bg-white">

      <div className="shadow-lg flex flex-col gap-2 rounded-lg p-4 w-96">

        <div className="flex justify-center items-center mix-blend-multiply">
          <Image src={mainlogo} alt="" className="w-[150px]" />
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-lg font-semibold">{isLogin ? 'Login' : 'Register'} to Conversur</span>

          {isLogin && <span className="text-sm">New User? <span onClick={() => setIsLogin(false)} className="cursor-pointer text-link hover:underline">Create an Account</span></span>}

          {!isLogin && <span className="text-sm">Already have an Account? <span onClick={() => setIsLogin(true)} className="cursor-pointer text-link hover:underline">Login to Account</span></span>}
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && <input type="text" ref={name} placeholder="Enter your Username" required className="p-2 w-full outline-none border-2 border-textColor/[0.5] shadow rounded-lg text-sm mb-4" />}

          <input type="email" ref={email} placeholder="Enter your Email" required className="p-2 w-full outline-none border-2 border-textColor/[0.5] shadow rounded-lg text-sm mb-4" />

          <div className="flex justify-between p-2 w-full border-2 border-textColor/[0.5] shadow rounded-lg text-sm">
            <input type={`${showPassword ? 'text' : 'password'}`} ref={password} placeholder="Enter your Password" required className="outline-none" />
            {showPassword && <FaEyeSlash size={20} onClick={() => setShowPassword(false)} className="text-textColor/[0.5] cursor-pointer" />}
            {!showPassword && <FaEye size={20} onClick={() => setShowPassword(true)} className="text-textColor/[0.5] cursor-pointer" />}
          </div>
          {error && <span className="text-xs text-[red]">Length of Password should be greater than 6</span>}

          <button type="submit" className="bg-gradient-to-br from-primaryGradientFrom to-primaryGradientTo text-white py-2 w-full rounded-lg mt-4">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        {isLogin && <Link href={'/reset-password'} className="text-right text-link text-xs cursor-pointer hover:underline">Forgot Password?</Link>}

        <Divider>OR</Divider>

        <div className="flex justify-center gap-6">
          <FcGoogle size={30} className="cursor-pointer" onClick={() => SocialActions('google')} />
          <FaGithub size={30} className="cursor-pointer" onClick={() => SocialActions('github')} />
        </div>
      </div>
    </div>) : <Loading />
  )
}

export default Authentication
