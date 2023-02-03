const Navbar = ({ title }: { title: string }) => {
    return (
        <nav>
            <div className="text-xl">{title}</div>
        </nav>
    );
};

export default Navbar;
