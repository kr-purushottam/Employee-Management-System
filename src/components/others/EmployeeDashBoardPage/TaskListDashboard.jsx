export default function TaskListDashboard(props) {
    return(
        <main className="mt-10">
            <div className='grid grid-cols-4 gap-2 mx-auto'>
                <div className=' bg-blue-500 px-9 py-6 font-bold rounded-xl'>
                    <p className="text-4xl">{props.data.taskCount.newTask}</p>
                    <p className="text-2xl">New Task</p>
                </div>

                <div className=' bg-green-500 px-9 py-6 font-bold rounded-xl'>
                    <p className="text-4xl">{props.data.taskCount.completed}</p>
                    <p className="text-2xl">Completed</p>
                </div>

                <div className=' bg-yellow-500 px-9 py-6 font-bold rounded-xl'>
                    <p className="text-4xl">{props.data.taskCount.active}</p>
                    <p className="text-2xl">Accepted</p>
                </div>
                
                <div className=' bg-orange-500 px-9 py-6 font-bold rounded-xl'>
                    <p className="text-4xl">{props.data.taskCount.failed}</p>
                    <p className="text-2xl">Failed</p>
                </div>
            </div>
        </main>
    )
}