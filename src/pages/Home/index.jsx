import { Outlet } from "react-router-dom"
import Aside from "../../components/Aside"
import { Container } from "./styles"



const Home = () => {

    return (
        <Container>
            <Aside />
            <Outlet />
        </Container>

    )
}

export default Home