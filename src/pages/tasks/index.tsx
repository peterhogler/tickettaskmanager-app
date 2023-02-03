import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";

const Tasks: React.FC = () => {
    return (
        <Layout>
            <section className="flex-1 p-4">
                <Navbar title="Tasks" />
                <p className="text-lg">Content</p>
            </section>
        </Layout>
    );
};

export default Tasks;
