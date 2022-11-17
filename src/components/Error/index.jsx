import { ErrorContainer } from "./styles"


const Error = ({ errorMessage }) => {

    return (
        <ErrorContainer>
            {errorMessage}
        </ErrorContainer>
    )
}

export default Error