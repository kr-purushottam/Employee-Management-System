export default function AdminTaskForm() {
    return(
        <div className="text-lg mt-6 h-[50%] bg-[#1c1c1c] w-[100%]">
            <form className="flex justify-between px-8 py-2">
                <div className="flex flex-col w-[100%]">
                    <label>
                        Task Title <br/>
                        <input
                            type="text"
                            placeholder="Make a UI design"
                            className="rounded px-2.5 py-1 outline-none bg-[#313131] w-[85%] border text-base"
                        />
                    </label><br/>

                    <label>
                        Date <br/>
                        <input
                            type="date"
                            placeholder="Make a UI design"
                            className="rounded px-2 py-1 outline-none bg-[#313131] w-[85%]  border text-base"
                        />
                    </label><br/>

                <label>
                    Assign To <br/>
                    <input
                        type="text"
                        placeholder="Make a UI design"
                        className="rounded px-2 py-1 outline-none bg-[#313131] w-[85%] border text-base"
                    />
                </label><br/>

                <label>
                    Category <br/>
                    <input
                        type="text"
                        placeholder="Design, Development, etc.."
                        className="rounded px-2 py-1 outline-none bg-[#313131] w-[85%] border text-base"
                    />
                </label><br/>
                </div>
                
                <div className="w-[100%] flex flex-col">
                    <label>
                        Description <br/>
                        <textarea
                            type="text"
                            placeholder="Detailed description of task(Max 500 word)"
                            className="rounded px-2 py-1 outline-none bg-[#313131] w-[85%] resize-none border h-57 text-base"
                        />
                    </label><br/>

                    <button className="bg-[#181818] w-[85%] text-white mb-6 py-1.5 cursor-pointer rounded hover:bg-amber-600">Create Task</button>
                </div>

                

                
            </form>
        </div>
    )
}