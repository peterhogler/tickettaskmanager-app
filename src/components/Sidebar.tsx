import Link from "next/link";
import { useState, useEffect } from "react";
import { BiUser, BiLabel, BiNotification, BiPlusCircle, BiSun, BiCog } from "react-icons/bi";
import CreateTaskModal from "./CreateTaskModal";
const Sidebar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <aside className="flex flex-col items-center py-4 px-3 border-r border-gray-200">
                <ul className="flex flex-col gap-4">
                    <li>
                        <button className="rounded p-1 hover:bg-slate-100">
                            <Link href="/">
                                <BiUser size={28} />
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className="rounded p-1 hover:bg-slate-100">
                            <Link href="tasks">
                                <BiNotification size={28} />
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className="rounded p-1 hover:bg-slate-100">
                            <Link href="labels">
                                <BiLabel size={28} />
                            </Link>
                        </button>
                    </li>
                    <li className="relative">
                        <button className="rounded p-1 hover:bg-slate-100" onClick={handleModalOpen}>
                            <BiPlusCircle size={28} />
                        </button>
                        {isModalOpen && <CreateTaskModal onClose={() => setIsModalOpen(false)} />}
                    </li>
                </ul>
                <ul className="mt-auto flex flex-col gap-4 relative">
                    <li>
                        <button className="rounded p-1 hover:bg-slate-100">
                            <BiSun size={28} />
                        </button>
                    </li>
                    <li>
                        <button className="rounded p-1 hover:bg-slate-100">
                            <BiCog size={28} />
                        </button>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;
