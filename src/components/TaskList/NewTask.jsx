import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function NewTask(props) {
    const{employeeData, updateAllTasks} = useContext(AuthContext);
    console.log("props",props)
    function handleAcceptTask() {
        const empUserData = props.data;
        
        
        const updatedEmployeeData = employeeData.map((ele, idx) => {
            if(empUserData.name === ele.name) {
                const updatedTaskCount = {
                    ...ele.taskCount,
                    newTask : ele.taskCount.newTask - 1,
                    active : ele.taskCount.active + 1
                };

                const updatedTasks = ele.tasks.map((task) => {
                    if(task.title === props.eachTask.title) {
                        return {
                            ...task,
                            newTask: false,
                            active: true,
                            completed: false
                        };
                    }
                    return task;
                })

                return {
                    ...ele,
                    taskCount : updatedTaskCount,
                    tasks : updatedTasks
                }
            }
            return ele;
        })
        localStorage.setItem('employee', JSON.stringify(updatedEmployeeData));
        updateAllTasks();
        // console.log("hello",props.data.taskCount.newTask)
        // props.taskCount.newTask = props.taskCount.newTask - 1;
        // props.taskCount.active = props.taskCount.active + 1;
    }
    return(
        <div className="flex-shrink-0 h-full w-[360px] bg-blue-400 rounded-xl p-4 text-white">
                <div className="flex justify-between font-bold">
                    <h3 className="bg-red-600 p-0.5 px-1 rounded">{props.eachTask.category}</h3>
                    <h3>{props.eachTask.date}</h3>
                </div>
                <h2 className="mt-6 text-3xl font-medium">{props.eachTask.title}</h2>
                <p className="mt-6 text-lg">{props.eachTask.description}</p>
                <div className="mt-16">
                    <button className="bg-green-500 py-1 px-2 rounded-sm cursor-pointer hover:bg-green-600 w-full" onClick={handleAcceptTask}>Accept Task</button>
                </div>
        </div>
    )
}