import { ButtonArea } from "./style"



const Button = ({ children, risk = false, onClick }) => {

    return (
        <ButtonArea onClick={onClick} risk={risk}>
            {children}
        </ButtonArea>
    )
}

export default Button