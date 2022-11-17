import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const AuthRoute = () => {
    const { authenticated } = useAuth()
    return !authenticated ? <Outlet /> : <Navigate to={"/"} />
}

export default AuthRoute