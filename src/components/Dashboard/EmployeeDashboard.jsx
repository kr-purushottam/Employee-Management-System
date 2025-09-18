
import Heading from '../others/EmployeeDashBoardPage/Heading'
import TaskListDashboard from '../others/EmployeeDashBoardPage/TaskListDashboard'

const EmployeeDashboard = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className='p-10'>
            <Heading/>
            <TaskListDashboard/>
        </div>
    </div>
  )
}

export default EmployeeDashboard