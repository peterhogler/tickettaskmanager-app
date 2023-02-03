const Dashboard = () => {
    return (
        <div className="mt-3 grid grid-cols-3 gap-3 w-2/3">
            <div className="ring-1 ">
                <h1>New</h1>
            </div>
            <div className="ring-1 ">
                <h1>Work In Progress</h1>
            </div>
            <div className="ring-1 ">
                <h1>Completed</h1>
            </div>
        </div>
    );
};

export default Dashboard;
