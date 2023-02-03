import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";

const Labels: React.FC = () => {
    return (
        <Layout>
            <section className="flex-1 p-4">
                <Navbar title="Labels" />
                <p className="text-lg">Content</p>
            </section>
        </Layout>
    );
};

export default Labels;
