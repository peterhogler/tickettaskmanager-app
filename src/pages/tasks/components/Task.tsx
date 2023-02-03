import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { INCREASE_TASK, DECREASE_TASK } from "@/Redux/tasksSlice";
import { Task } from "@/Redux/tasksSlice";
import { useAppDispatch } from "@/hooks/reduxHooks";

interface TaskProps {
    details: Task;
}

const Task: React.FC<TaskProps> = ({ details }) => {
    const reduxDispatch = useAppDispatch();

    const handleTaskBackwardButton = (task: Task) => {
        reduxDispatch(DECREASE_TASK(task));
    };

    const handleTaskForwardButton = (task: Task) => {
        reduxDispatch(INCREASE_TASK(task));
    };

    const getStatusClass = (status: number) => {
        switch (status) {
            case 1:
                return "bg-yellow-300";
            case 2:
                return "bg-yellow-400";
            case 3:
                return "bg-emerald-500";
            default:
                return "";
        }
    };

    const statusClass = getStatusClass(details.status);

    return (
        <li
            className={`flex items-center p-3 ring-1 ring-slate-400 rounded cursor-pointer ${statusClass}`}
            key={details.id}>
            <h1>Title: {details.title}</h1>
            <div className="flex ml-auto">
                {details.status > 1 && (
                    <button
                        className="hover:bg-gray-200 rounded-full duration-300"
                        onClick={() => handleTaskBackwardButton(details)}>
                        <BiCaretLeft size={23} />
                    </button>
                )}
                {details.status < 3 && (
                    <button
                        className="hover:bg-gray-200 rounded-full duration-300"
                        onClick={() => handleTaskForwardButton(details)}>
                        <BiCaretRight size={23} />
                    </button>
                )}
            </div>
        </li>
    );
};

export default Task;
