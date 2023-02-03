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
            <aside className="flex flex-col items-start py-4 px-3 border-r border-gray-200 shadow">
                <ul className="flex flex-col gap-4 font-bold">
                    <li>
                        <button className="rounded p-1 hover:bg-slate-100 w-full">
                            <Link className="flex items-center gap-2  px-1" href="/">
                                <BiUser size={28} />
                                Account
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className="rounded p-1 hover:bg-slate-100 w-full">
                            <Link className="flex items-center gap-2  px-1" href="labels">
                                <BiLabel size={28} />
                                Labels
                            </Link>
                        </button>
                    </li>
                    <li className="relative">
                        <button className="rounded p-1 hover:bg-slate-100 w-full" onClick={handleModalOpen}>
                            <div className="flex items-center gap-2  px-1">
                                <BiPlusCircle size={28} />
                                Create Task
                            </div>
                        </button>
                    </li>
                </ul>
                <ul className="flex flex-col gap-4 mt-auto">
                    <li>
                        <button className="rounded p-1 hover:bg-slate-100 w-full">
                            <Link className="flex items-center gap-2  px-1" href="/">
                                <BiSun size={28} />
                                Theme
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className="rounded p-1 hover:bg-slate-100 w-full">
                            <Link className="flex items-center gap-2  px-1" href="tasks">
                                <BiCog size={28} />
                                Settings
                            </Link>
                        </button>
                    </li>
                </ul>
            </aside>
            {isModalOpen && <CreateTaskModal onClose={() => setIsModalOpen(false)} />}
        </>
    );
};

export default Sidebar;
