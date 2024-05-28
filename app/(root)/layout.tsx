// import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";
import StreamVideoProvider from "../../providers/StreamClientProvider";

export const metadata: Metadata = {
    title: "Kino VCA",
    description: "Virtual Conferencing App",
    icons: {
      icon: '/icons/logo1.jpg'
    }
  };

const RootLayout = ({ children }: { children: ReactNode}) =>{
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout