import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const ProtectedRoute = () => {
    const { authenticated } = useAuth()
    return authenticated ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoute