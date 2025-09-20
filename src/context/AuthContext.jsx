import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
    
    const [employeeData, setEmployeeData] = useState(null);
    const [adminData, setAdminData] = useState(null);

    useEffect(() => {
        const{ employeeData, adminData } = getLocalStorage();
        setEmployeeData(employeeData);
        setAdminData(adminData);
    },[])

    const value = { employeeData, adminData };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext;