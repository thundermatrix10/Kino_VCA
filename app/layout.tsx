import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';

import { Toaster } from "../components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kino VCA",
  description: "Virtual Conferencing App",
  icons: {
    icon: '/icons/logo1.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: '/icons/logo1.png',
            socialButtonsVariant: 'iconButton'
          },
          variables: {
            colorText: '#fff',
            colorPrimary: '#0E78F9',
            colorBackground: '#1C1F2E',
            colorInputBackground: '#252A41',
            colorInputText: '#fff'
          }
        }}
      >
        <body className={'${inter.className} bg-dark-2'}>
          {children}
          <Toaster/>
        </body>
      </ClerkProvider>
    </html>
  );
}
