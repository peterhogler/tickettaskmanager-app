import { useAppSelector } from "@/hooks/reduxHooks";
import Task from "./Task";

const Dashboard = () => {
    const tasks = useAppSelector((state) => state.myTasks.tasks);

    return (
        <div className="mt-3 grid grid-cols-3 gap-4">
            <div className="">
                <div className="ring-1 ring-slate-400 text-center bg-slate-300 mb-4 py-2 rounded">
                    <h1>New</h1>
                </div>
                <ul className="grid grid-cols-1 gap-3">
                    {tasks
                        .filter((task) => task.status === 1)
                        .map((task) => (
                            <Task details={task} />
                        ))}
                </ul>
            </div>
            <div>
                <div className="ring-1 ring-slate-400 text-center bg-slate-300 mb-2 py-2 rounded ">
                    <h1>Work In Progress</h1>
                </div>
                <ul className="grid grid-cols-1 gap-3">
                    {tasks
                        .filter((task) => task.status === 2)
                        .map((task) => (
                            <Task details={task} />
                        ))}
                </ul>
            </div>
            <div className="">
                <div className="ring-1 ring-slate-400 text-center bg-slate-300 mb-2 py-2 rounded">
                    <h1>Completed</h1>
                </div>
                <ul className="grid grid-cols-1 gap-3">
                    {tasks
                        .filter((task) => task.status === 3)
                        .map((task) => (
                            <Task details={task} />
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
