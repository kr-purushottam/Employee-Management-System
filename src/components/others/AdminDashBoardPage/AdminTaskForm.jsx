import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";

export default function AdminTaskForm() {
    const{updateAllTasks} = useContext(AuthContext);

    const[newTask, setNewTask] = useState({
        title : "",
        date : "",
        assignTo: "",
        category: "",
        description: ""
    })
    // const[task, setTask] = useState({});

    function handleChange(event) {
        const{name, value} = event.target;
        setNewTask((prev) => ({
            ...prev, 
            [name] : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        const {assignTo, ...taskData} = newTask; //remove assignTo

        const newTaskObj = {
            ...taskData,
            active : false,
            completed : false,
            failed : false,
            newTask : true
        }

        const employeeData = JSON.parse(localStorage.getItem('employee'))
        const updatedEmployeeData  = employeeData.map((emp) => {
            if(emp.name === newTask.assignTo) {
                return {
                    ...emp,
                    tasks : [...emp.tasks, newTaskObj]
                }
            }
            return emp;
        })

        localStorage.setItem('employee', JSON.stringify(updatedEmployeeData));
        updateAllTasks()
        setNewTask({title : "", date : "", assignTo: "", category: "", description: ""});
    }

    return(
        <div className="text-lg mt-6 h-[50%] bg-[#1c1c1c] w-[100%]">
            <form className="flex justify-between px-8 py-2" onSubmit={handleSubmit}>
                <div className="flex flex-col w-[100%]">
                    <label>
                        Task Title <br/>
                        <input
                            name="title"
                            type="text"
                            placeholder="Make a UI design"
                            className="rounded px-2.5 py-1 outline-none bg-[#313131] w-[85%] border text-base"
                            value={newTask.title}
                            onChange={handleChange}
                        />
                    </label><br/>

                    <label>
                        Date <br/>
                        <input
                            name="date"
                            type="date"
                            placeholder="Make a UI design"
                            className="rounded px-2 py-1 outline-none bg-[#313131] w-[85%]  border text-base"
                            value={newTask.date}
                            onChange={handleChange}
                        />
                    </label><br/>

                <label>
                    Assign To <br/>
                    <input
                        name="assignTo"
                        type="text"
                        placeholder="Make a UI design"
                        className="rounded px-2 py-1 outline-none bg-[#313131] w-[85%] border text-base"
                        value={newTask.assignTo}
                        onChange={handleChange}
                    />
                </label><br/>

                <label>
                    Category <br/>
                    <input
                        name="category"
                        type="text"
                        placeholder="Design, Development, etc.."
                        className="rounded px-2 py-1 outline-none bg-[#313131] w-[85%] border text-base"
                        value={newTask.category}
                        onChange={handleChange}
                    />
                </label><br/>
                </div>
                
                <div className="w-[100%] flex flex-col">
                    <label>
                        Description <br/>
                        <textarea
                            name="description"
                            type="text"
                            placeholder="Detailed description of task(Max 500 word)"
                            className="rounded px-2 py-1 outline-none bg-[#313131] w-[85%] resize-none border h-57 text-base"
                            value={newTask.description}
                            onChange={handleChange}
                        />
                    </label><br/>

                    <button className="bg-[#181818] w-[85%] text-white mb-6 py-1.5 cursor-pointer rounded hover:bg-amber-600">Create Task</button>
                </div>

                

                
            </form>
        </div>
    )
}