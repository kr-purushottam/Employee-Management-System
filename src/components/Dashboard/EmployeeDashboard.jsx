
import Heading from '../others/EmployeeDashBoardPage/Heading'
import TaskListDashboard from '../others/EmployeeDashBoardPage/TaskListDashboard'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className='p-10 h-screen'>
            <Heading/>
            <TaskListDashboard/>
            <TaskList/>
        </div>
    </div>
  )
}

export default EmployeeDashboard