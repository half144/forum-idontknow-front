import { AsideArea, ListArea, ListItem } from "./styles"
import { FaNewspaper, FaCheckCircle } from "react-icons/fa"
import { BsXCircleFill } from "react-icons/bs"


const Aside = () => {

    return (
        <AsideArea>
            <ListArea>
                <ListItem to="/">
                    <FaNewspaper size={20} />
                    <p>Novo</p>
                </ListItem>
                <ListItem to="/solveds">
                    <FaCheckCircle size={20} />
                    <p>Resolvidos</p>
                </ListItem>
                <ListItem to="/unsolveds">
                    <BsXCircleFill size={20} />
                    <p>Não resolvidos</p>
                </ListItem>
            </ListArea>
        </AsideArea>
    )
}

export default Aside