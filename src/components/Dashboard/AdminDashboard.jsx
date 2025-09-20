import AdminTaskForm from "../others/AdminDashBoardPage/AdminTaskForm";
import AllTask from "../others/AdminDashBoardPage/AllTask";
import LogoutHeading from "../others/EmployeeDashBoardPage/LogoutHeading";
import TaskListDashboard from "../others/EmployeeDashBoardPage/TaskListDashboard";

export default function AdminDashboard({data}) {
    return(
        <div className="text-white min-h-screen">
            <div className="h-[100%] m-6">
                <LogoutHeading data={data}/>
                <AdminTaskForm/>
                <AllTask data={data}/>
            </div>
        </div>
    )
}