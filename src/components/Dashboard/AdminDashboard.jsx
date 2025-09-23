import AdminTaskForm from "../others/AdminDashBoardPage/AdminTaskForm";
import AllTask from "../others/AdminDashBoardPage/AllTask";
import LogoutHeading from "../others/EmployeeDashBoardPage/LogoutHeading";


export default function AdminDashboard(props) {
    return(
        <div className="text-white min-h-screen">
            <div className="h-[100%] m-6">
                <LogoutHeading changeUser={props.changeUser} data={props.data}/>
                <AdminTaskForm/>
                <AllTask/>
            </div>
        </div>
    )
}