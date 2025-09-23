import { useContext } from "react";
import AcceptedTask from "./AcceptTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import AuthContext from "../../context/AuthContext";

export default function TaskList(props) {
    console.log("props is ", props)
    const{employeeData} = useContext(AuthContext);
    return(
        <div className="mt-10 h-[55%] py-5 flex items-center justify-start gap-2 overflow-x-auto">
            {props.data.tasks.map((element, idk) => {
                if(element.newTask) { 
                    return <NewTask eachTask={element} data={props.data} key={idk} />
                }
                if(element.active) {
                    return <AcceptedTask data={element} key={idk}/>
                }
                if(element.completed) {
                    return <CompletedTask data={element} key={idk}/>
                }
                if(element.failed) {
                    return <FailedTask data={element} key={idk}/>
                }
            })}
        </div>

        // <div id="tasklist" className="mt-10 h-[55%] bg-amber-900 grid auto-rows-[1fr] grid-flow-col auto-cols-[360px] gap-2 overflow-x-auto">
        //     <div className=" bg-amber-400">

        //     </div>
        //     <div className=" bg-amber-400">

        //     </div>
        //     <div className=" bg-amber-400">

        //     </div>
        //     <div className=" bg-amber-400">

        //     </div>
        //     <div className=" bg-amber-400">

        //     </div>
        //     <div className=" bg-amber-400">

        //     </div>
        //     <div className=" bg-amber-400">

        //     </div>
        //     <div className=" bg-amber-400">

        //     </div>
        //     <div className=" bg-amber-400">

        //     </div>
        //     <div className=" bg-amber-400">

        //     </div>
            

        // </div>
    )
}