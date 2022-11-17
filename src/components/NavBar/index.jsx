import { useAuth } from "../../context/AuthContext"
import { AuthArea, CreateQuestion, Header, Input, Logo, Search } from "./styles"
import { Link } from "react-router-dom"

const Navbar = () => {
    const { authenticated, logout } = useAuth()

    return (
        <Header>
            <Logo>
                <Link className="logo" to="/">
                    <img src="https://i.ibb.co/R2JsVgv/Facebook-post-1-1.png" alt="logo" />
                </Link>
            </Logo>
            <Search>
                <Input placeholder="Pesquisar" />
            </Search>
            <Link to="/create">
                <CreateQuestion>
                    Criar pergunta
                </CreateQuestion>
            </Link>
            <AuthArea>
                {authenticated ? (
                    <>
                        <Link to="/profile"><p>Perfil</p></Link>
                        <p onClick={logout}>Sair</p>
                    </>
                ) : (<Link to="/login"><p>Entrar</p></Link>)}
            </AuthArea>
        </Header>
    )
}

export default Navbar