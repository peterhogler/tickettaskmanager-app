import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Dashboard from "./components/Dashboard";

export default function Home() {
    return (
        <>
            <Layout>
                <section className="flex-1 p-4">
                    <Navbar title="Ticket Task Manager" />

                    <Dashboard />
                </section>
            </Layout>
        </>
    );
}
