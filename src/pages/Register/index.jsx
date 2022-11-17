import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { Container, FormLogin, Input, Label, Submit } from "./styles"
import { Link } from "react-router-dom"
import Error from "../../components/Error"

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [formError, setFormError] = useState("")
    const { register, error, clearError } = useAuth()

    const handleRegister = async (e) => {
        e.preventDefault()
        setFormError("")
        clearError()
        if (password !== confirmPassword) {
            setFormError("senhas precisam ser iguais")
            return
        }
        await register({ username, email, password })
    }

    useEffect(() => {
        return clearError
    }, [])

    return (
        <Container>
            <FormLogin onSubmit={handleRegister}>
                <h1>Registrar</h1>
                <Label>
                    <p>Seu usuário</p>
                    <Input placeholder="Usuário" required onChange={e => setUsername(e.target.value)} value={username} />
                </Label>
                <Label>
                    <p>Seu e-mail</p>
                    <Input placeholder="E-mail" required onChange={e => setEmail(e.target.value)} value={email} />
                </Label>
                <Label>
                    <p>Sua senha</p>
                    <Input placeholder="Senha" type="password" required onChange={e => setPassword(e.target.value)} value={password} />
                </Label>
                <Label>
                    <p>Confirmar sua senha</p>
                    <Input placeholder="Senha" type="password" required onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </Label>
                <Submit type="submit" value="Registar" />
                <p>Já tem uma conta? <Link to="/login">Entrar</Link></p>
                {error && <Error errorMessage={error} />}
                {formError && <Error errorMessage={formError} />}
            </FormLogin>
        </Container>
    )
}

export default Register