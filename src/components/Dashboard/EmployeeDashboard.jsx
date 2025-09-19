
import LogoutHeading from '../others/EmployeeDashBoardPage/LogoutHeading'
import TaskListDashboard from '../others/EmployeeDashBoardPage/TaskListDashboard'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className='p-10 h-screen'>
            <LogoutHeading/>
            <TaskListDashboard/>
            <TaskList/>
        </div>
    </div>
  )
}

export default EmployeeDashboard