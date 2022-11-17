import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import App from "../App"
import Questions from "../components/Questions"
import { useAuth } from "../context/AuthContext"
import Create from "../pages/Create"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import Question from "../pages/Question"
import Register from "../pages/Register"
import AuthRoute from "./AuthRoute"
import ProtectedRoute from "./ProtectedRoute"

const Router = () => {
    const { loading } = useAuth()

    if (loading) return

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route element={<Home />}>
                        <Route path="/" element={<Questions />} />
                        <Route path="/unsolveds" element={<Questions />} />
                        <Route path="/solveds" element={<Questions />} />
                    </Route>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/create" element={<Create />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route path="/question/:id" element={<Question />} />
                </Route>
                <Route element={<AuthRoute />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router