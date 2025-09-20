import { FaArrowCircleLeft } from "react-icons/fa";

const Heading = () => {
  return (
    <div className="flex justify-start p-6 gap-16 text-center items-center">
        <button className="cursor-pointer"><FaArrowCircleLeft size={28}/></button>
        <h1 className="text-4xl font-bold">Create Task</h1>
    </div>
  )
}

export default Heading