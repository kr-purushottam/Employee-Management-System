import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AuthContext from "./context/AuthContext"
import { setLocalStorage } from "./utils/LocalStorage"

function App() {
  const{ setLoginUserProfile, LoginUser, employeeData, adminData } = useContext(AuthContext);
  const[loggedInUserData, setLoggedInUserData] = useState(null);

  // useEffect(() => {
  //   if(employeeData && adminData) {
  //     const loggedInUserRole = JSON.parse(localStorage.getItem("loggedInUser"));
  //     // console.log(loggedInUserRole.role)
  //   }  
  // },[employeeData , adminData])

  function handleLogin(email, password) {
    if(email === "admin@mail.com") {
      const loggedInAdmin = adminData.find((admin) => email === admin.email && password == admin.password)
      if(loggedInAdmin) {
        setLoggedInUserData(loggedInAdmin);
      }
      
      localStorage.setItem("loggedInUser", JSON.stringify({role : "admin"}))
      setLoginUserProfile()

    } else if(employeeData) {
      const loggedInEmployee = employeeData.find((emp) => email === emp.email && password == emp.password)
      // console.log("loggedInEmployee", loggedInEmployee)
      if(loggedInEmployee) {
        setLoggedInUserData(loggedInEmployee);
      }

      localStorage.setItem("loggedInUser", JSON.stringify({role : "employee"}))
      setLoginUserProfile()

    } else{
      alert("koi aisa user hai hi nai lala");
    }
  }

  return (
    <>
      {/* {console.log("LoginUser is ", LoginUser)} */}
      {!LoginUser && <Login handleLogin={handleLogin}/>}
      {LoginUser === "employee" && <EmployeeDashboard data={loggedInUserData}/> }
      {LoginUser === "admin" && <AdminDashboard data={loggedInUserData}/> }

      {/* {user == "" ? <Login handleLogin={handleLogin}/> : ""}
      {user === "employee" && <EmployeeDashboard/> }
      {user === "admin" && <AdminDashboard/> } */}
    </>
  )
}

export default App
