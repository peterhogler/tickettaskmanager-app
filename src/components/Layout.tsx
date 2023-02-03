import Head from "next/head";
import React from "react";
import Sidebar from "./Sidebar";
import { Sofia_Sans } from "@next/font/google";

const sofia = Sofia_Sans({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={sofia.className}>
                <div className="flex h-[100dvh]">
                    <Sidebar />
                    {children}
                </div>
            </main>
        </>
    );
};

export default Layout;