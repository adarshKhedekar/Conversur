"use client";
import Home from "@/components/Home";
import Dashboard from "@/components/Dashboard";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {

  const session = useSession();
  const router = useRouter()

  useEffect(() => {
    if(session?.status === 'unauthenticated'){
      router.replace('/login')
    }
    console.log(session)
    console.log(session.status)

  },[session.status, router, session])
  return (
    !(session.status === 'loading' || session.status === 'unauthenticated') ?( <>
      <Dashboard />
      <div className="flex w-full">
        <Home />
      </div>
    </>) : <Loading/>
  );
}
