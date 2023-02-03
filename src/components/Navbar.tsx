import User from "@/pages/components/User";

const Navbar = ({ title }: { title: string }) => {
    return (
        <nav className="flex justify-between">
            <div className="text-xl font-bold">{title}</div>
            <User />
        </nav>
    );
};

export default Navbar;
