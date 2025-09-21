
import LogoutHeading from '../others/EmployeeDashBoardPage/LogoutHeading'
import TaskListDashboard from '../others/EmployeeDashBoardPage/TaskListDashboard'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ( props ) => {
  // console.log("from emp : ", loggedInUserData)
  return (
    <div className='min-h-screen flex flex-col'>
        <div className='p-10 h-screen'>
            <LogoutHeading data={props.data} changeUser={props.changeUser}/>
            <TaskListDashboard data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    </div>
  )
}

export default EmployeeDashboard