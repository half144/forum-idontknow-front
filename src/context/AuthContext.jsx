import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { api } from "../api/api";
import clearLocalStorage from "../utils/clearLocalStorageUser"

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true)
  const clearError = () => {
    setError(null)
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("u_user"))
    if (user) {
      setUser(user)
      setAuthenticated(true)
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('u_token'))}`;
    }
    setLoading(false)
  }, [])

  const login = async ({ username, password }) => {
    try {
      const { data } = await api.post("/auth/login", { username, password });
      if (!data.token) throw new Error("error")
      const { token, ...others } = data
      setUser(others)
      setAuthenticated(true)
      localStorage.setItem("u_user", JSON.stringify(others))
      localStorage.setItem("u_token", JSON.stringify(data.token))
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('u_token'))}`;
      clearError()
    } catch (error) {
      setError(error.response.data.errorMessage);
    }
  };

  const register = async (userCredentials) => {
    try {
      const { data } = await api.post("/auth/register", userCredentials)
      const { token, ...others } = data
      setUser(others)
      setAuthenticated(true)
      localStorage.setItem("u_user", JSON.stringify(others))
      localStorage.setItem("u_token", JSON.stringify(data.token))
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('u_token'))}`;
      clearError()
    } catch (error) {
      setError("Nome de usuário ou e-mail já estão sendo utilizados")
    }
  }

  const logout = () => {
    setAuthenticated(false)
    setUser(false)
    clearLocalStorage()
    delete api.defaults.headers.common["Authotization"]
  }

  return (
    <AuthContext.Provider value={{ login, logout, register, clearError, authenticated, user, loading, error }}>
      {children}
    </AuthContext.Provider>);
};

export default AuthProvider;
