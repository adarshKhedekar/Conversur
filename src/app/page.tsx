"use client"
import ReduxProvider from "@/redux/redux-provider";
import Dashboard from "@/components/Dashboard";

export default function Home() {

  return (
    <ReduxProvider>
      <div className="bg-background font-poppins">
        <Dashboard />
      </div>
    </ReduxProvider>
  );
}
