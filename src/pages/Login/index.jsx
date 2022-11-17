import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { Container, FormLogin, Input, Label, Submit } from "./styles"
import { Link } from "react-router-dom"
import Error from "../../components/Error"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login, error, clearError } = useAuth()

    const handleLogin = async (e) => {
        e.preventDefault()
        clearError()
        await login({ username, password })
    }

    useEffect(() => {
        return clearError
    }, [])

    return (
        <Container>
            <FormLogin onSubmit={handleLogin}>
                <h1>Login</h1>
                <Label>
                    <p>Seu usuário</p>
                    <Input placeholder="Usuário" required onChange={e => setUsername(e.target.value)} value={username} />
                </Label>
                <Label>
                    <p>Sua senha</p>
                    <Input placeholder="Senha" type="password" required onChange={e => setPassword(e.target.value)} value={password} />
                </Label>
                <Submit type="submit" value="Entrar" />
                <p>Não tem uma conta? <Link to="/register">Registrar-se</Link></p>
                {error && <Error errorMessage={error} />}
            </FormLogin>
        </Container>
    )
}

export default Login