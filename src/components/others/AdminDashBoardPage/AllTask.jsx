import { useContext } from "react"
import AuthContext from "../../../context/AuthContext"

export default function AllTask() {
    const {employeeData} = useContext(AuthContext);
    return(
        <div className="w-[100%] bg-[#1c1c1c] p-5 flex flex-col gap-2 text-lg my-6">
            <div className="bg-[#ea7a74] flex justify-between px-6 py-2 rounded mt-1.5 text-xl font-bold gap-2">
                <h2 className="w-1/5">Employee Name</h2>
                <h3 className="w-1/5">New Task</h3>
                <h5 className="w-1/5">Active Task</h5>
                <h3 className="w-1/5">Completed</h3>
                <h3 className="w-1/5">Failed</h3>
            </div>

            <div>
                {employeeData.map((employee) => {
                    return(<div 
                            className=" flex justify-between p-5 py-2 rounded mt-1.5 gap-6 border-emerald-500 border-3 text-lg"
                            key={employee.id}>
                            <h2 className="w-1/5">{employee.name}</h2>
                            <h3 className="w-1/5 text-blue-500">{employee.taskCount.newTask}</h3>
                            <h5 className="w-1/5 text-yellow-500">{employee.taskCount.active}</h5>
                            <h5 className="w-1/5">{employee.taskCount.completed}</h5>
                            <h5 className="w-1/5 text-red-600">{employee.taskCount.failed}</h5>
                        </div>)
                })}
            </div>
            
            
            {/* <div className="bg-yellow-300 flex justify-between px-3 py-2 rounded mt-1.5">
                <h2>Purushottam</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div> */}
            
        </div>
    )
}