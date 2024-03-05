"use client";
import Home from "@/components/Home";
import Dashboard from "@/components/Dashboard";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";

export default function page() {

  const {status} = useSession();

  return (
    !(status === 'loading' || status === 'unauthenticated') ?( <>
      <Dashboard />
      <div className="flex w-full">
        <Home />
      </div>
    </>) : <Loading/>
  );
}
