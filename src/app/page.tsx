"use client"
import ReduxProvider from "@/redux/redux-provider";
import Home from "@/components/Home";

export default function page() {

  return (
    <ReduxProvider>
      <div className="flex w-full">
        <Home />
      </div>
    </ReduxProvider>
  );
}
