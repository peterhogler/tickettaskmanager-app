import { useAppSelector } from "@/hooks/reduxHooks";
import Task from "./Task";

const Dashboard = () => {
    const tasks = useAppSelector((state) => state.myTasks.tasks);

    return (
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
                <div className="flex items-center justify-between  mb-4 py-3  rounded font-semibold border-b">
                    <div className="flex items-center text-lg">
                        <div className="h-5 w-5 bg-yellow-400 rounded-full mr-3" />
                        <h1>Newly Created Tasks</h1>
                    </div>
                    <div>Date Added</div>
                </div>
                <ul className="grid grid-cols-1 gap-4">
                    {tasks
                        .filter((task) => task.status === 1)
                        .map((task) => (
                            <Task details={task} />
                        ))}
                </ul>
            </div>
            <div>
                <div className="flex items-center justify-between  mb-4 py-3  rounded font-semibold border-b">
                    <div className="flex items-center text-lg">
                        <div className="h-5 w-5 bg-yellow-500 rounded-full mr-3" />
                        <h1>Work In Progress/h1>
                    </div>
                    <div>Date Added</div>
                </div>
                <ul className="grid grid-cols-1 gap-4">
                    {tasks
                        .filter((task) => task.status === 2)
                        .map((task) => (
                            <Task details={task} />
                        ))}
                </ul>
            </div>
            <div>
                <div className="flex items-center justify-between  mb-4 py-3  rounded font-semibold border-b">
                    <div className="flex items-center text-lg">
                        <div className="h-5 w-5 bg-emerald-400 rounded-full mr-3" />
                        <h1>Completed Task</h1>
                    </div>
                    <div>Date Added</div>
                </div>
                <ul className="grid grid-cols-1 gap-4">
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
