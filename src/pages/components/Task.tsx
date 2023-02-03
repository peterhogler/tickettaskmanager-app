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
                return "custom-yellow-bg hover:bg-animate";
            case 2:
                return "custom-orange-bg hover:bg-animate";
            case 3:
                return "custom-emerald-bg hover:bg-animate";
            default:
                return "";
        }
    };

    const statusClass = getStatusClass(details.status);

    return (
        <li
            className={`flex items-center p-3 ring-1 ring-slate-400 rounded cursor-pointer ${statusClass} shadow duration-300 ease flex-wrap`}
            key={details.id}>
            <div className={`h-5 w-5 bg-yellow-400 rounded-full mr-4 ${statusClass}`} />
            <h1 className="font-medium">Title: {details.title}</h1>

            <div className="flex ml-auto flex-wrap">
                <div>Created: {details.date}</div>
                <hr className="mx-4 w-[1px] h-5 bg-black" />
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
