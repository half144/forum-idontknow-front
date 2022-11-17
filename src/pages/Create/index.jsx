import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import useCreateQuestion from "../../hooks/useCreateQuestion"
import { Container, FormCreate, Input, Submit, TextArea } from "./styles"



const Create = () => {
    const { user } = useAuth()
    const [title, setTitle] = useState()
    const [question, setQuestion] = useState()
    const { mutateAsync } = useCreateQuestion()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await mutateAsync({ user: user._id, title, question }, { onSuccess: navigate("/") })
    }

    return (
        <Container>
            <FormCreate onSubmit={handleSubmit}>
                <Input onChange={(e) => setTitle(e.target.value)} placeholder="Titulo da sua pergunta" />
                <TextArea onChange={(e) => setQuestion(e.target.value)} placeholder="Diga aqui qual sua duvida" />
                <Submit type="submit" value="Enviar" />
            </FormCreate>
        </Container>
    )
}

export default Create