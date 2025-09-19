import AdminTaskForm from "../others/AdminDashBoardPage/AdminTaskForm";
import AllTask from "../others/AdminDashBoardPage/AllTask";
import LogoutHeading from "../others/EmployeeDashBoardPage/LogoutHeading";
import TaskListDashboard from "../others/EmployeeDashBoardPage/TaskListDashboard";

export default function AdminDashboard() {
    return(
        <div className="text-white min-h-screen">
            <div className="h-[100%] m-6">
                <LogoutHeading/>
                <AdminTaskForm/>
                <AllTask/>
            </div>
        </div>
    )
}