import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Dashboard from "./tasks/components/Dashboard";
import User from "./tasks/components/User";
import { useState } from "react";

export default function Home() {
    return (
        <>
            <Layout>
                <section className="flex-1 p-4">
                    <Navbar title="Ticket Task Manager" />
                    <User />
                    <Dashboard />
                </section>
            </Layout>
        </>
    );
}
