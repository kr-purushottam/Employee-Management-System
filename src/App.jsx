import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AuthContext from "./context/AuthContext"
import { setLocalStorage } from "./utils/LocalStorage"

function App() {
  const{ employeeData, adminData } = useContext(AuthContext);
  const[user, setUser] = useState(null);
  const[loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }

  },[])





  function handleLogin(email, password) {
    if(email === "admin@mail.com" && password == "123") {
      const loggedInAdmin = adminData[0];
      if(loggedInAdmin) {
        setUser('admin');
        setLoggedInUserData(loggedInAdmin)
        localStorage.setItem("loggedInUser", JSON.stringify({role : "admin", data : loggedInAdmin}))
      }
    } else if(employeeData) {
      const loggedInEmployee = employeeData.find((emp) => email === emp.email && password == emp.password)
      
      if(loggedInEmployee) {
        setUser("employee")
        setLoggedInUserData(loggedInEmployee);
        localStorage.setItem("loggedInUser", JSON.stringify({role : "employee", data : loggedInEmployee}))
      }

      
    } else{
      alert("koi aisa user hai hi nai lala");
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin}/>}
      {user === "employee" && <EmployeeDashboard data={loggedInUserData}/> }
      {user === "admin" && <AdminDashboard data={loggedInUserData}/> }

      {/* {user == "" ? <Login handleLogin={handleLogin}/> : ""}
      {user === "employee" && <EmployeeDashboard/> }
      {user === "admin" && <AdminDashboard/> } */}
    </>
  )
}

export default App