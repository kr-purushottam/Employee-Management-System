export default function AcceptedTask({title, date, description, category}) {
    return(
        <div className="flex-shrink-0 h-full w-[360px] bg-red-400 rounded-xl p-4 text-white">
                <div className="flex justify-between font-bold">
                    <h3 className="bg-red-600 p-0.5 px-1 rounded">{category}</h3>
                    <h3>{date}</h3>
                </div>
                <h2 className="mt-6 text-3xl font-medium">{title}</h2>
                <p className="mt-6 text-lg">{description}</p>
                <div className="flex justify-between mt-16">
                    <button className="bg-green-500 py-1 px-2 rounded-sm cursor-pointer hover:bg-green-600">Mark as completed</button>
                    <button className="bg-red-500 py-1 px-2 rounded-sm cursor-pointer hover:bg-red-600">Mark as failed</button>
                </div>
        </div>
    )
}