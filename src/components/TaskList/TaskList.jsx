import AcceptedTask from "./AcceptTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

export default function TaskList(props) {
    // console.log(data)
    return(
        <div className="mt-10 h-[55%] py-5 flex items-center justify-start gap-2 overflow-x-auto">
            {props.data.tasks.map((element, idk) => {
                if(element.NewTask) { 
                    return <NewTask 
                        key={idk}
                        title={element.title} 
                        date={element.date} 
                        description={element.description}
                        category={element.category}
                    />
                }
                if(element.active) {
                    return <AcceptedTask 
                        key={idk}
                        title={element.title} 
                        date={element.date} 
                        description={element.description}
                        category={element.category}
                    />
                }
                if(element.completed) {
                    return <CompletedTask 
                        key={idk} 
                        title={element.title} 
                        date={element.date} 
                        description={element.description}
                        category={element.category}
                    />
                }
                if(element.failed) {
                    return <FailedTask 
                        key={idk}
                        title={element.title} 
                        date={element.date} 
                        description={element.description}
                        category={element.category}
                    />
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