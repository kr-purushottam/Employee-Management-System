import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [LoginUser, setLoginUser] = useState("");
    const [employeeData, setEmployeeData] = useState(null);
    const [adminData, setAdminData] = useState(null);

    useEffect(() => {
        const{ employeeData, adminData } = getLocalStorage();
        setEmployeeData(employeeData);
        setAdminData(adminData);
        setLoginUserProfile();
    },[])

    function setLoginUserProfile() {
        setLoginUser((JSON.parse(localStorage.getItem("loggedInUser"))).role);
    }

    function logoutUser() {
        localStorage.setItem("loggedInUser", JSON.stringify({role : ""}));
        setLoginUser("");
    }

    const value = {logoutUser, setLoginUserProfile, LoginUser, employeeData, adminData};
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext;