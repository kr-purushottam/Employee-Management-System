
import LogoutHeading from '../others/EmployeeDashBoardPage/LogoutHeading'
import TaskListDashboard from '../others/EmployeeDashBoardPage/TaskListDashboard'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ( {data} ) => {
  // console.log("from emp : ", loggedInUserData)
  return (
    <div className='min-h-screen flex flex-col'>
        <div className='p-10 h-screen'>
            <LogoutHeading data={data}/>
            <TaskListDashboard data={data}/>
            <TaskList data={data}/>
        </div>
    </div>
  )
}

export default EmployeeDashboard